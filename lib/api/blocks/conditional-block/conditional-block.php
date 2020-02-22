<?php
/**
 * Plugin Name:     Conditional Block
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

function create_wordpress_block_conditional_block_block_init() {
	$dir = dirname( __FILE__ );
	$url = BEANS_API_URL.'blocks/conditional-block/';
	$script_asset_path = "$dir/build/index.asset.php";
	$script_asset = require( $script_asset_path );
	$index_js     = 'build/index.js';

	wp_enqueue_script(
        'create-wordpress-block-conditional-block-block',
        $url . $index_js,
        $script_asset['dependencies'],
		$script_asset['version']
	);
// ddd($url . $index_js);
	// $script_asset = require( $script_asset_path );
	// wp_register_script(
	// 	'create-wordpress-block-conditional-block-block-editor',
	// 	$url . $index_js,
	// 	$script_asset['dependencies'],
	// 	$script_asset['version']
	// );

	// $url = BEANS_API_URL.'/blocks/conditional_block/';

	// $script_asset_path = "$dir/build/index.asset.php";
	// if ( ! file_exists( $script_asset_path ) ) {
	// 	throw new Error(
	// 		'You need to run `npm start` or `npm run build` for the "create-wordpress-block/conditional-block" block first.'
	// 	);
	// }

	// $index_js     = 'build/index.js';
	// $script_asset = require( $script_asset_path );
	// wp_register_script(
	// 	'create-wordpress-block-conditional-block-block-editor',
	// 	$url . $index_js,
	// 	$script_asset['dependencies'],
	// 	$script_asset['version']
	// );

	// $editor_css = 'editor.css';
	// wp_register_style(
	// 	'create-wordpress-block-conditional-block-block-editor',
	// 	$url . $editor_css,
	// 	array(),
	// 	filemtime( "$dir/$editor_css" )
	// );

	// $style_css = 'style.css';
	// wp_register_style(
	// 	'create-wordpress-block-conditional-block-block',
	// 	$url . $style_css,
	// 	array(),
	// 	filemtime( "$dir/$style_css" )
	// );

	// register_block_type( 'create-wordpress-block/conditional-block', array(
	// 	'editor_script' => 'create-wordpress-block-conditional-block-block-editor',
	// 	'editor_style'  => 'create-wordpress-block-conditional-block-block-editor',
	// 	'style'         => 'create-wordpress-block-conditional-block-block',
	// ) );
}
add_action( 'init', 'create_wordpress_block_conditional_block_block_init' );

/**
 * Filter block content before displaying.
 *
 * @param string $block_content the block content.
 * @param array  $block the whole Gutenberg block object including attributes.
 * @return string $block_content the new block content.
 */
function beans_conditional_block_render_block($block_content, $block){
	if ( 'beans/conditional-block' !== $block['blockName'] ) {
		return $block_content;
	}
	d($block_content);

	if($block['atts']['beansLayout'] == 'test'){
		return $block_content;
	}
	return '';
	return $block_content;
}
add_filter( 'render_block', 'beans_conditional_block_render_block', 999, 2 );
