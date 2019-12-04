<?php
/**
 * Handles Beans theme activation
 *
 * @package Beans\Admin\Onboarding
 *
 */
namespace Beans\Admin;

add_action( 'after_switch_theme', __NAMESPACE__ . '\insert_default_image_settings' );
/**
 * Redirects users to the Beans Onboarding page after theme activation
 * if the theme provides an onboarding configuration in config/onboarding.php.
 *
 * @since 2.0.0
 */
function insert_default_image_settings() {
	return add_option(
		'bean_featured_images',
		beans_get_config('images')['visibility']
	);
}

add_action( 'after_switch_theme', __NAMESPACE__ . '\insert_default_breadcrumb_settings' );
/**
 * Inserts the default Bean Breadcrumb settings values into the options table, if they don't already exist.
 *
 * @return bool True of setting added, false otherwise.
 * @since 2.0.0
 *
 */
function insert_default_breadcrumb_settings()
{
	return add_option(
		'bean_breadcrumbs',
		beans_get_config('breadcrumbs')['visibility']
	);
}
