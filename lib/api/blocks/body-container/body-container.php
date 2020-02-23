<?php
/**
 * Plugin Name:     Body Container
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
function create_block_body_container_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/body-container" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	$url = BEANS_API_URL.'blocks/body-container/';

	wp_register_script(
		'create-block-body-container-block-editor',
		$url . $index_js,
		$script_asset['dependencies'],
		$script_asset['version']
	);

	register_block_type( 'create-block/body-container', array(
		'editor_script' => 'create-block-body-container-block-editor',
	) );
}
add_action( 'init', 'create_block_body_container_block_init' );



add_filter( 'render_block', 'beans_body_container_render_block', 999, 2 );
/**
 * Filter block content before displaying.
 *
 * @param string $block_content the block content.
 * @param array  $block the whole Gutenberg block object including attributes.
 * @return string $block_content the new block content.
 */
function beans_body_container_render_block($block_content, $block){
	if ( 'beans/body-container' !== $block['blockName'] ) {
		return $block_content;
	}

	$body_container = beans_get_body_container();
	// Wrap content with a container
	if ($body_container){
		$block_content = '<div class="'.$body_container.'">' . $block_content . '</div>';
	}
	return $block_content;
}