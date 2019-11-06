<?php

/**
 * Beans admin page.
 *
 * @since   1.0.0
 * @ignore
 * @access  private
 *
 * @package Beans\Framework\API
 */
final class _Beans_Admin_Onboarding
{

	public function onboarding_config()
	{
		return beans_get_config('onboarding');
	}

	public function install()
	{

		//self::install_plugins();
//		self::onboarding_import_content();
//		self::onboarding_create_navigation_menu_items();

	}


	public function onboarding_plugins()
	{
		$config = self::onboarding_config();
		return isset($config['dependencies']['plugins']) ? (array)$config['dependencies']['plugins'] : [];
	}

	public function onboarding_navigation_menus()
	{
		$config = self::onboarding_config();
		return isset($config['navigation_menus']) ? (array)$config['navigation_menus'] : [];
	}

	public function onboarding_content()
	{
		$config = self::onboarding_config();
		return isset($config['content']) ? (array)$config['content'] : [];
	}


	public function display_title()
	{
		$config = self::onboarding_config();
		return isset($config['title']) ? (string)$config['title'] : '';
	}

	public function display_image()
	{
		// @TODO update this from url and if doesn't exist use default.
		$config = self::onboarding_config();
		return isset($config['thumbnail']) ? (string)$config['thumbnail'] : 'TODO DEfault image';
	}


	private function install_plugins()
	{
		// Install Plugins
		$plugins = self::onboarding_plugins();
		foreach ($plugins as $onboarding_plugin) {
			$short_slug = strtok($onboarding_plugin['slug'], DIRECTORY_SEPARATOR);
//			activate_plugin( $onboarding_plugin['slug'], false, false, true );

			d($short_slug);
//			$api = plugins_api( 'plugin_information', array( 'slug' => $short_slug ) );
		}

	}

	/**
	 * Imports the demo content during onboarding.
	 *
	 * @param array $content The content config array.
	 * @return array
	 * @since 2.9.0
	 *
	 */
	private function onboarding_import_content()
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

				$post_id = wp_insert_post($post);

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
			do_action('genesis_onboarding_after_import_content', $content, $imported_post_ids);

			// Save the imported post IDs for use during menu item creation.
			update_option('beans_onboarding_imported_post_ids', $imported_post_ids, false);

		}

		return [
			'homepage_edit_link' => $homepage_edit_link,
			'errors' => $errors,
		];
	}


	/**
	 * Creates the navigation menu items based on the configuration
	 * provided in the child theme.
	 *
	 * @since 2.9.0
	 * @return array Empty array if successful, an array of error messages if not.
	 */
	private function onboarding_create_navigation_menu_items() {
		$errors         = [];
		$menus_config   = self::onboarding_navigation_menus();
		$menu_locations = get_nav_menu_locations();
		$imported_posts = get_option( 'beans_onboarding_imported_post_ids', [] );

		// Create a menu location if one does not exist.
		// @TODO TEST THIS CODE
		if( $menu_locations['primary'] == 0){
			$locations = get_theme_mod('nav_menu_locations');
			$menu_header = get_term_by('name', 'Primary Menu', 'nav_menu');

			$menu_header_id = $menu_header->term_id;
			if($menu_header_id == 0) {
				$menu_header_id = wp_create_nav_menu('Primary Menu');
			}
			$locations['primary'] = $menu_header_id;
			set_theme_mod( 'nav_menu_locations', $locations );
			$menu_locations = get_nav_menu_locations();
		}


		foreach ( $menus_config as $menu_location => $menu_location_config ) {
			if ( ! isset( $menu_locations[ $menu_location ] ) ) {
				continue;
			}

			$menu_id = $menu_locations[ $menu_location ];

			$new_menu_item = [];

			foreach ( $menu_location_config as $slug => $menu_item ) {

				$new_menu_item[ $slug ] = [];

				if ( ! empty( $menu_item['parent'] ) ) {
					$new_menu_item[ $slug ]['parent'] = $menu_item['parent'];
				}

				$post_object = get_post( $imported_posts[ $slug ] );

				if ( empty( $post_object ) ) {
					continue;
				}

				$menu_item_parent_id = ! empty( $menu_item['parent'] ) && ! empty( $new_menu_item[ $menu_item['parent'] ] ) && ! empty( $new_menu_item[ $menu_item['parent'] ]['id'] ) ? $new_menu_item[ $menu_item['parent'] ]['id'] : 0;

				$nav_menu_item_id = wp_update_nav_menu_item(
					$menu_id,
					0,
					[
						'menu-item-title'     => $menu_item['title'],
						'menu-item-status'    => 'publish',
						'menu-item-type'      => 'post_type',
						'menu-item-object'    => $post_object->post_type,
						'menu-item-object-id' => $post_object->ID,
						'menu-item-parent-id' => $menu_item_parent_id,
					]
				);

				if ( is_wp_error( $nav_menu_item_id ) ) {
					/* translators: 1: Title of the menu item, 2: The error message. */
					$errors[] = sprintf( esc_html__( 'There was an error creating the %1$s menu item. Error: %2$s', 'genesis' ), $menu_item['title'], $nav_menu_item_id->get_error_message() );
					continue;
				}

				$new_menu_item[ $slug ]['id'] = $nav_menu_item_id;
			}
		}

		return $errors;
	}

}
