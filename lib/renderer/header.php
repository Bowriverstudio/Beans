<?php
/**
 * Cleans Header.
 *
 * @package Beans\Framework\Render
 *
 * @since   2.0.0
 */


add_action( 'get_header', 'genesis_doc_head_control' );
/**
 * Remove unnecessary code that WordPress puts in the `head`.
 *
 * @since 1.3.0
 */
function genesis_doc_head_control() {

	if( ! get_theme_mod('beans_wp_generator', false) ){
		remove_action( 'wp_head', 'wp_generator' );
	}

	if( ! get_theme_mod('beans_head_adjacent_posts_rel_link', false) ){
		remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10 );
	}

	if( ! get_theme_mod('beans_head_wlwmanifest_link', false) ){
		remove_action( 'wp_head', 'wlwmanifest_link' );
	}

	if( ! get_theme_mod('beans_head_shortlink', false) ){
		remove_action( 'wp_head', 'wp_shortlink_wp_head' );
	}
}
