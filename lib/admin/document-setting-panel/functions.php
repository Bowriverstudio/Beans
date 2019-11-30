<?php
/**
 * Beans Gutenberg Sidebar.
 */

namespace Beans\Admin\Editor\Sidebar;

add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_assets');
/**
 * Enqueue the resources needed for Beans Sidebar.
 */
function enqueue_assets(){

	$asset_file = include(BEANS_ADMIN_PATH . 'editor/sidebar/build/index.asset.php');

	$url =

	wp_enqueue_script(
		'beans-gutenberg-sidebar',
		BEANS_ADMIN_DOCUMENT_SETTING_PANEL_URL . 'build/index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_enqueue_style(
		'beans-gutenberg-sidebar-style',
		BEANS_ADMIN_DOCUMENT_SETTING_PANEL_URL . 'build/style.css',
		'',
		filemtime(BEANS_ADMIN_PATH . 'document-setting-panel/build/style.css')

	);
}


