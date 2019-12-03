<?php
/**
 * Handles Beans theme activation
 *
 * @package Beans\Admin\Onboarding
 *
 */
namespace Beans\Admin\Onboarding;

add_action( 'admin_init', __NAMESPACE__ . '\theme_activation_redirect' );
/**
 * Redirects users to the Beans Onboarding page after theme activation
 * if the theme provides an onboarding configuration in config/onboarding.php.
 *
 * @since 2.0.0
 */
function theme_activation_redirect() {

	global $pagenow;
	if ( 'themes.php' !== $pagenow || ! isset( $_GET['activated'] ) || ! is_admin() ) { // phpcs:ignore WordPress.Security.NonceVerification.NoNonceVerification
		return;
	}

	// Beans Onboarding file required.
	if ( !_beans_onboarding_config() ){
		return;
	}

	wp_safe_redirect( esc_url( admin_url( 'admin.php?page=beans_onboarding' ) ) );
	exit;
}


