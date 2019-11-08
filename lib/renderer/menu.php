<?php
/**
 * Sets up the Beans menus.
 *
 * @package Beans\Framework\Render
 *
 * @since   1.0.0
 */

beans_add_smart_action( 'after_setup_theme', 'beans_do_register_default_menu' );
/**
 * Register default menu.
 *
 * @since 1.0.0
 *
 * @return void
 */
function beans_do_register_default_menu() {
	// Stop here if a menu already exists.
	if ( wp_get_nav_menus() ) {
		return;
	}

	$name = __( 'Navigation', 'tm-beans' );

	// Set up a default menu if it doesn't exist.
	if ( ! wp_get_nav_menu_object( $name ) ) {
		wp_update_nav_menu_item(
			wp_create_nav_menu( $name ),
			0,
			array(
				'menu-item-title'   => __( 'Home', 'tm-beans' ),
				'menu-item-classes' => 'home',
				'menu-item-url'     => home_url( '/' ),
				'menu-item-status'  => 'publish',
			)
		);
	}
}

beans_add_smart_action( 'after_setup_theme', 'beans_do_register_nav_menus' );
/**
 * Register nav menus.
 *
 * @since 1.6.0 - Add support for config in child theme.
 * @since 1.0.0
 *
 * @return void
 */
function beans_do_register_nav_menus() {
	$menu = beans_get_config( 'menu' );
	register_nav_menus( $menu );
}

