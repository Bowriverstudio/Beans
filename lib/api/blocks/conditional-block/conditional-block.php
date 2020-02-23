<?php
/**
 * Plugin Name:     Beans Conditional Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * Text Domain:     create-block
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_beans_conditional_block_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/beans-conditional-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	$url = BEANS_API_URL.'blocks/beans-conditional-block/';

	wp_register_script(
		'create-block-beans-conditional-block-block-editor',
		$url . $index_js,
		$script_asset['dependencies'],
		$script_asset['version']
	);

	register_block_type( 'create-block/beans-conditional-block', array(
		'editor_script' => 'create-block-beans-conditional-block-block-editor',
	) );
}
add_action( 'init', 'create_block_beans_conditional_block_block_init' );



add_filter( 'render_block', 'beans_conditional_block_render_block', 999, 2 );
/**
 * Filter block content before displaying.
 *
 * @param string $block_content the block content.
 * @param array  $block the whole Gutenberg block object including attributes.
 * @return string $block_content the new block content.
 */
function beans_conditional_block_render_block($block_content, $block){
	if ( 'beans/beans-conditional-block' !== $block['blockName'] ) {
		return $block_content;
	}
	
	if( array_key_exists('beansLayout', $block['attrs'])){
		if( $block['attrs']['beansLayout'] == beans_get_layout()){
			return $block_content;
		}
	}

	return '';
}
