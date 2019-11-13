<?php

namespace Beans\Admin\Document_Settings_Panel;

add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_assets');
/**
 * Enqueue the resources needed for Beans Sidebar.
 */
function enqueue_assets(){

	$asset_file = include(BEANS_ADMIN_PATH . 'document-setting-panel/build/index.asset.php');

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


/*
 *
 *
 *

wp.data.dispatch('core/editor').editPost({meta: {beans_layout: 'ssssnew value'}})
wp.data.dispatch('core/editor').editPost({meta: {beans_layout: 'sssssnew value'}})





 */


