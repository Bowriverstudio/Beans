<?php
/**
 * Beans Framework.
 * This core file should only be overwritten via your child theme.
 *
 * We strongly recommend to read the Beans documentation to find out more about
 * how to customize the Beans theme.
 *
 * @author Beans
 * @link   https://www.getbeans.io
 * @package Beans\Framework
 */

/**
 * Initialize Beans theme framework.
 *
 * @author Beans
 * @link   https://www.getbeans.io
 */

require_once dirname( __FILE__ ) . '/lib/init.php';

//
//
//
//function myprefix_enqueue_assets() {
//
//	$asset_file = include(BEANS_ADMIN_PATH.'document-setting-panel/build/index.asset.php');
//
//	wp_enqueue_script(
//		'myprefix-gutenberg-sidebar',
//		BEANS_ADMIN_DOCUMENT_SETTING_PANEL_URL .  'build/index.js',
//		$asset_file['dependencies'],
//		$asset_file['version']
//	);
//
//	wp_enqueue_style(
//		'myprefix-gutenberg-sidebar-style',
//		BEANS_ADMIN_DOCUMENT_SETTING_PANEL_URL .  'build/style.css',
//		'',
//		filemtime( BEANS_ADMIN_PATH.'document-setting-panel/build/style.css' )
//
//	);
//
//
//}
//add_action( 'enqueue_block_editor_assets', 'myprefix_enqueue_assets' );
////		filemtime( _get_plugin_directory() . $editor_js_path ),
////		true


