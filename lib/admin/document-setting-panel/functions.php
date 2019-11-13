<?php
// Note that it’s a best practice to prefix function names (e.g. myprefix)


define( 'BEANS_ADMIN_DOCUMENT_SETTING_PANEL_URL', BEANS_URL . 'admin/document-setting-panel/' );


function myprefix_enqueue_assets() {

	$asset_file = include(BEANS_ADMIN_PATH.'document-setting-panel/build/index.asset.php');


	wp_enqueue_script(
		'myprefix-gutenberg-sidebar',
		BEANS_ADMIN_DOCUMENT_SETTING_PANEL_URL .  'build/index.js',
		array( 'wp-plugins', 'wp-edit-post', 'wp-i18n', 'wp-element' ),
		$asset_file['dependencies'],
		$asset_file['version']


);

}
add_action( 'enqueue_block_editor_assets', 'myprefix_enqueue_assets' );
//		filemtime( _get_plugin_directory() . $editor_js_path ),
//		true


function myprefix_register_meta() {
register_meta('post', '_myprefix_text_metafield', array(
	'show_in_rest' => true,
	'type' => 'string',
	'single' => true,
));
}
add_action('init', 'myprefix_register_meta');


