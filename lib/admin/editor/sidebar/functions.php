<?php
/**
 * Beans Gutenberg Sidebar.
 */

namespace Beans\Admin\Document_Settings_Panel;

add_action('enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_assets');
/**
 * Enqueue the resources needed for Beans Sidebar.
 *
 */
function enqueue_assets(){

	// Only load these assets if the post type supports it.
	$current_screen = get_current_screen();
	$post_type      = $current_screen->post_type ?: '';

	if ( ! post_type_supports( $post_type, 'custom-fields' ) ) {
		return [];
	}

	$asset_file = include(BEANS_ADMIN_PATH . 'editor/sidebar/build/index.asset.php');
	$build_url = BEANS_URL . 'admin/editor/sidebar/build/';

	wp_enqueue_script(
		'beans-sidebar-script',
		$build_url . 'index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_enqueue_style(
		'beans-sidebar-style',
		$build_url . 'style.css',
		'',
		filemtime(BEANS_ADMIN_PATH . 'editor/sidebar/build/style.css')

	);
}

