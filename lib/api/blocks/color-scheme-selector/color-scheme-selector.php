<?php
/**
 * Plugin Name:     Color Scheme-selector
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * Text Domain:     create-wordpress-block
 *
 * @package         create-wordpress-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_wordpress_block_color_scheme_selector_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-wordpress-block/color-scheme-selector" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	$url = BEANS_API_URL.'blocks/beans-conditional/';

	wp_register_script(
		'create-wordpress-block-color-scheme-selector-block-editor',
		$url . $index_js,
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'editor.css';
	wp_register_style(
		'create-wordpress-block-color-scheme-selector-block-editor',
		$url . $editor_css,
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'create-wordpress-block-color-scheme-selector-block',
		$url . $style_css,
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-wordpress-block/color-scheme-selector', array(
		'editor_script' => 'create-wordpress-block-color-scheme-selector-block-editor',
		'editor_style'  => 'create-wordpress-block-color-scheme-selector-block-editor',
		'style'         => 'create-wordpress-block-color-scheme-selector-block',
	) );
}
add_action( 'init', 'create_wordpress_block_color_scheme_selector_block_init' );

add_filter( 'render_block', 'beans_color_scheme_selector_block_render_block', 999, 2 );
/**
 * Filter block content before displaying.
 *
 * @param string $block_content the block content.
 * @param array  $block the whole Gutenberg block object including attributes.
 * @return string $block_content the new block content.
 */
function beans_color_scheme_selector_block_render_block($block_content, $block){
	if ( 'beans/color-scheme-selector' !== $block['blockName'] ) {
		return $block_content;
	}

	return '<p>HELLO BLock </p>';
}