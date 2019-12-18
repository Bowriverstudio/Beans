<?php
/**
 * Handles Beans onboarding.
 *
 * @package Beans\Admin\Onboarding
 *
 * @since   2.0.0
 */

namespace Beans\Admin\Onboarding;

require_once BEANS_ADMIN_PATH . 'onboarding/theme-activation.php';

require_once BEANS_ADMIN_PATH . '/onboarding/class-beans-onboarding-admin-page.php';
require_once BEANS_ADMIN_PATH . '/onboarding/class-beans-onboarding-category.php';
require_once BEANS_ADMIN_PATH . '/onboarding/class-beans-onboarding-content.php';
require_once BEANS_ADMIN_PATH . '/onboarding/class-beans-onboarding-navigation.php';
require_once BEANS_ADMIN_PATH . '/onboarding/class-beans-onboarding-options.php';
require_once BEANS_ADMIN_PATH . '/onboarding/class-beans-onboarding-plugins.php';
require_once BEANS_ADMIN_PATH . '/onboarding/class-beans-onboarding-theme-mod.php';
require_once BEANS_ADMIN_PATH . '/onboarding/class-beans-onboarding-widgets.php';
//		require_once BEANS_ADMIN_PATH . '/onboarding/Beans_Silent_Upgrader_Skin.php';


function beans_get_onboarding_content(string $slug){

}

/**
 * Returns the config file - onboarding if exists.
 *
 * @access private: Should not be accessed from child theme.
 * @return array
 * @since 2.0.0
 *
 */
function _beans_onboarding_config(){
	return beans_get_config('onboarding');
}


/**
 * Inserts the onboarding data.
 */
function _beans_onboard($overwrite = false){

	$onboard = new _Beans_Onboarding_Category();
	$onboard->import();

	$onboard = new _Beans_Onboarding_Content();
	$onboard->import_content($overwrite);

	$onboard = new _Beans_Admin_Onboarding_Widgets();
	$onboard->import_widgets();

	// Do not duplicate the nativation.
	if( ! $overwrite ){
		$onboard = new _Beans_Admin_Onboarding_Navigation();
		$onboard->create_navigation_menu_items();
	}

	$onboard = new _Beans_Admin_Onboarding_Theme_Mod();
	$onboard->import();

	$onboard = new _Beans_Admin_Onboarding_Options();
	$onboard->import();

	/**
	 * Fire after everthing is imported.
	 *
	 * @since  2.0.0
	 */
	do_action('beans_onboarding_after_import');

	flush_rewrite_rules(true);
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

	// TODO BEANS_VERSION instead of time once completed.
	wp_enqueue_style(
		'beans-admin-css',
		BEANS_ADMIN_ASSETS_URL . 'css/admin.css','',time()
	);

	wp_enqueue_style('thickbox');
	wp_enqueue_script('thickbox');
}


