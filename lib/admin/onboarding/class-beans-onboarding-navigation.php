<?php
/**
 * This class handles the navigation onboarding.
 *
 * @package Beans\Framework\Admin\Onboarding
 *
 * @since 1.0.0
 */

/**
 * Beans admin page.
 *
 * @since   2.0.0
 * @ignore
 * @access  private
 *
 * @package Beans\Framework\API
 */
namespace Beans\Admin\Onboarding;

final class _Beans_Admin_Onboarding_Navigation
{

	public function navigation_menus() {
		$config = _beans_onboarding_config();
		return isset($config['navigation_menus']) ? (array)$config['navigation_menus'] : [];
	}

	/**
	 * Beans Widget content.
	 *
	 * @return void
	 * @since 2.0.0
	 *
	 */
	public function display()
	{

		$navigation_menus = self::navigation_menus();

		echo '<div>';
			echo __( '<h3>Navigation List</h3>');
			echo __( '<p>Import the onboarding navigation.</p>');

		?>

			<table>
				<tr>
					<th></th>
					<th><? echo __( 'Location'); ?></th>
					<th>Items</th>
				</tr>

				<?php
				foreach ( $navigation_menus as $menu_location => $items):
					?>
					<tr>
						<td><?php echo $menu_location; ?>
						<td><?php echo implode(',', array_keys($items))?></td>
					</tr>
				<?php
				endforeach;
				?>
			</table>
		<?php
		echo '</div>';

	}

	public function delete_onboarding_menus(){
		d(get_nav_menu_locations());
		$menus_config   = self::navigation_menus();
		foreach ( $menus_config as $menu_location => $menu_location_config ) {
			d($menu_location);
					$menu = get_term( $menu_location );

			$menu = wp_get_nav_menu_object( $menu_location );
			d($menu);
			wp_delete_nav_menu($menu_location);
		}

	}

	/**
	 * Creates the navigation menu items based on the configuration
	 * provided in the child theme.
	 *
	 * @since 2.9.0
	 * @return array Empty array if successful, an array of error messages if not.
	 */
	public function create_navigation_menu_items() {
		$errors         = [];
		$menus_config   = self::navigation_menus();
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

					$nav_menu_item_id = wp_update_nav_menu_item(
						$menu_id,
						0,
						[
							'menu-item-title'     => $menu_item['title'],
							'menu-item-status'    => 'publish',
							'menu-item-url'      => ($menu_item['url'] ?: '#'),
						]
					);

				} else {
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
				}

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

