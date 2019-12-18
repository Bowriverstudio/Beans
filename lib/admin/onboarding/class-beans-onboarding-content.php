<?php
/**
 * This class build the Beans admin page.
 *
 * @package Beans\Framework\Admin\Onboarding
 *
 * @since 2.0.0
 */

/**
 * Beans admin page.
 *
 * @since   2.0.0
 * @ignore
 * @access  private
 *
 * @package Beans\Framework\Admin\Onboarding
 */
namespace Beans\Admin\Onboarding;

final class _Beans_Onboarding_Content
{
	public function onboarding_content()
	{
		$config = _beans_onboarding_config();

		// Load files from config/content/import if not defined in config file.
		if( !array_key_exists('content', $config)) {
			$files = array_slice(scandir(ONBOARDING_CONTENT_PATH), 2);
			$data = array();
			foreach ($files as $file) {
				$_file = ONBOARDING_CONTENT_PATH . '/' . $file;
				list($slug, $extension) = explode('.', $file) ;
				if (is_readable($_file)) {
					$data[$slug] = require $_file;
				}
			}
			return $data;
		}

		return isset($config['content']) ? (array)$config['content'] : [];
	}


	/**
	 * Beans options page content.
	 *
	 * @return void
	 * @since 1.0.0
	 *
	 */
	public function display()
	{
		?>
		<div>
			<h3>Theme Content</h3>
				<?php
				$content = self::onboarding_content();
				// TODO Disenel - Change hardcode child theme name.
				printf(__('<p>There is a total of %1$s posts / pages to be imported from the %2$s onboarding configuration file</p>', 'tm-beans'), sizeof($content), 'CHILD THEME NAME');

				?>
		</div>
		<?php
	}


	/**
	 * Imports the demo content during onboarding.
	 *
	 * @param boolean $overwrite Does the
	 * @return array
	 * @since 2.9.0
	 *
	 */
	public function import_content($overwrite = false)
	{
		$errors = [];

		$homepage_edit_link = false;

		$post_defaults = [
			'post_content' => '',
			'post_excerpt' => '',
			'post_status' => 'publish',
			'post_title' => '',
			'post_type' => 'post',
			'comment_status' => 'closed',
			'ping_status' => 'closed',
		];

		$content = self::onboarding_content();

		if (!empty($content)) {

			$imported_post_ids = [];

			foreach ($content as $key => $post) {

				$post = wp_parse_args($post, $post_defaults);

				// Adds post to category
				if(array_key_exists('post_category',  $post)){
					$category_ids = array();
					foreach( $post['post_category'] as $category_slug){
						$category_ids[] = get_category_by_slug($category_slug)->term_id;
					}
					$post['post_category'] = $category_ids;
				}

				$post_id = false;
				if( $overwrite ){
					$slug =  sanitize_title_with_dashes( $post['post_title'] );
					$posts = get_posts(array(
						'name' => $slug,
						'posts_per_page' => 1,
						'post_type' => $post['post_type'],
					));
					if( is_array( $posts) && sizeof($posts) == 1 ){
						// Update Post instead of inserting it.
						$post['ID'] = $posts[0]->ID;
						$post_id = $post['ID'];
						wp_update_post( $post );
					}
				}

				if( ! $post_id ){
					$post_id = wp_insert_post($post);
				}

				if (is_wp_error($post_id)) {
					/* translators: 1: Title of the page, 2: The error message. */
					$errors[] = sprintf(esc_html__('There was an error importing the %1$s page. Error: %2$s', 'genesis'), $post['post_title'], $post_id->get_error_message());
					continue;
				}

				$imported_post_ids[$key] = $post_id;

				if ('homepage' === $key) {
					update_option('show_on_front', 'page');
					update_option('page_on_front', $post_id);
					$homepage_edit_link = esc_url_raw(admin_url('post.php?action=edit&post=' . $post_id));
				}

				if ('blog' === $key) {
					update_option('page_for_posts', $post_id);
				}

				if (!empty($post['page_template'])) {
					update_post_meta($post_id, '_wp_page_template', sanitize_text_field($post['page_template']));
				}

				if(!empty($post['post_meta'])) {
					foreach( $post['post_meta'] as $meta_key => $meta_value ){
						add_post_meta($post_id, $meta_key, $meta_value);
					}
				}

				if (!empty($post['featured_image'])) {

					$featured_image_url = esc_url_raw($post['featured_image']);
					$remote_image_import = wp_http_validate_url($featured_image_url);
					$local_image_path = $featured_image_url;

					if ($remote_image_import) {
						$local_image_path = download_url($featured_image_url);
					}

					if (is_wp_error($local_image_path)) {
						/* translators: 1: URL of the image, 2: The error message. */
						$errors[] = sprintf(esc_html__('There was an error downloading the featured image from %1$s. Error: %2$s', 'genesis'), $featured_image_url, $local_image_path->get_error_message());
						continue;
					}

					if (!is_readable($local_image_path)) {
						/* translators: %s: Path to local image file. */
						$errors[] = sprintf(esc_html__('Could not read the file: %s.', 'genesis'), $local_image_path);
						continue;
					}

					$file = [
						'name' => basename($featured_image_url),
						'tmp_name' => $local_image_path,
					];

					$attachment_id = media_handle_sideload($file, $post_id);

					if (is_wp_error($attachment_id)) {
						/* translators: 1: Name of the image, 2: The error message. */
						$errors[] = sprintf(esc_html__('There was an error importing the %1$s image. Error: %2$s', 'genesis'), $file['name'], $attachment_id->get_error_message());
						continue;
					}

					set_post_thumbnail($post_id, $attachment_id);

					if ($remote_image_import && is_readable($local_image_path)) {
						unlink($local_image_path);
					}


				}
			}



			/**
			 * Fire after content is imported.
			 *
			 * @since  2.10.0
			 */
			do_action('beans_onboarding_after_import_content', $content, $imported_post_ids);

			// Save the imported post IDs for use during menu item creation.
			update_option('beans_onboarding_imported_post_ids', $imported_post_ids, false);

		}

		return [
			'homepage_edit_link' => $homepage_edit_link,
			'errors' => $errors,
		];
	}


}

