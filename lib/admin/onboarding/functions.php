<?php
/**
 * Handles Beans onboarding.
 *
 * @package Beans\Admin\Onboarding
 *
 * @since   2.0.0
 */

namespace Beans\Admin\Onboarding;

//require_once BEANS_ADMIN_PATH . 'onboarding/theme-activation.php';
//require_once BEANS_ADMIN_PATH . 'onboarding/ajax-functions.php';
//		require_once $functions_dir . 'onboarding.php';
require_once BEANS_ADMIN_PATH . '/onboarding/menu-onboarding.php';
require_once BEANS_ADMIN_PATH . '/onboarding/onboarding.php';
require_once BEANS_ADMIN_PATH . '/onboarding/onboarding-content.php';
require_once BEANS_ADMIN_PATH . '/onboarding/onboarding-plugins.php';
//		require_once BEANS_ADMIN_PATH . '/onboarding/Beans_Silent_Upgrader_Skin.php';

/**
 * Returns the config file - onboarding if exists.
 *
 * @access private: Should not be accessed from child theme.
 * @return array
 * @since 2.0.0
 *
 */
function _beans_onboarding_config()
{
	return beans_get_config('onboarding');
}


add_action('admin_enqueue_scripts', __NAMESPACE__ . '\enqueue_script');
/**
 * Enqueue javascript script used in onboarding.
 */
function enqueue_script() {
	// TODO BEANS_VERSION instead of time once completed.
	wp_enqueue_script(
		'beans-onboarding-functions',
		BEANS_ADMIN_JS_URL . 'onboarding-functions.js',
		['jquery'],
		time(),
		true
	);

	wp_localize_script(
		'beans-onboarding-functions',
		'beans_globals',
		[
			'ajax_url' => admin_url('admin-ajax.php'),
			'nonce' => wp_create_nonce('beans_nonce')
		]
	);


	wp_enqueue_style(
		'beans-admin-css',
		BEANS_ADMIN_ASSETS_URL . 'css/admin.css','',time()
	);
}


