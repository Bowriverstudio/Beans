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

final class _Beans_Onboarding_Category
{
	public function onboarding_category_data()
	{
		$config = _beans_onboarding_config();
		return isset($config['category_data']) ? (array)$config['category_data'] : [];
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
			<h3>Theme Categories</h3>
			<?php
			$category_data = self::onboarding_category_data();
			if (array_key_exists('categories', $category_data)) {
				printf(__('<p>There is a total of %1$s categories imported</p>', 'tm-beans'), sizeof($category_data['categories']));
			}
			?>
		</div>
		<?php
	}


	/**
	 * Inserts Options from the onboarding config file.
	 *
	 * @since 2.0.0
	 *
	 */
	public function import()
	{
		$category_data = self::onboarding_category_data();
		if (array_key_exists('categories', $category_data)) {
			foreach ($category_data['categories'] as $category) {
				wp_insert_category($category);
			}
		}
		if (array_key_exists('default_category', $category_data)) {
			update_option('default_category', get_category_by_slug($category_data['default_category'])->term_id);
		}

		if (array_key_exists('remove_uncategorized', $category_data)) {
			$uncategorized = get_category_by_slug('uncategorized');
			if( $uncategorized ){
				wp_delete_category($uncategorized->term_id);

			}
		}
	}


}

