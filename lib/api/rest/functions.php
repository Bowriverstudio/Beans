<?php
/**
 * Functions for rest API.  Adapted from Genesis Framework.
 *
 * @package Beans\Framework\API\Rest
 * @since   2.0.0
 */
namespace Beans\Framework\API\Rest;

require_once 'breadcrumbs.php';
require_once 'images.php';
require_once 'remove-actions.php';
//ddd('sss');

//add_action( 'rest_api_init', __NAMESPACE__ . '\\layouts' );
///**
// * Add `layouts` endpoint to the REST API.
// *
// * Example: `curl https://beans.test/wp-json/beans/v1/layouts/all`
// *
// * @since 3.1.0
// */
//function layouts() {
//	\register_rest_route(
//		'beans/v1',
//		'/layouts/(\w+)',
//		[
//			'methods'  => 'GET',
//			'callback' => function( $type ) {
//				return \beans_get_layouts( $type );
//			},
//		]
//	);
//}
//
//add_action( 'rest_api_init', __NAMESPACE__ . '\\get_singular_images' );
///**
// * Add `singular-images` endpoint to the REST API.
// *
// * Returns an array of post types that have beans-singular-images support
// * with singular images enabled in the Singular Content panel in the Customizer.
// *
// * Example: `curl https://example.com/wp-json/beans/v1/singular-images`
// *
// * Example response:
// *
// * [
// *     'post', // Featured Images are enabled on posts.
// *     'page'  // Featured Images are enabled on pages.
// * ]
// *
// * @since 3.1.0
// */
//function get_singular_images() {
//	\register_rest_route(
//		'beans/v1',
//		'/singular-images',
//		[
//			'methods'  => 'GET',
//			'callback' => '\beans_post_types_with_singular_images_enabled',
//		]
//	);
//}
//
//add_action( 'rest_api_init', __NAMESPACE__ . '\\set_singular_images' );
///**
// * Update singular image state to turn featured image output on or off for
// * the provided post types.
// *
// * Expects to receive a JSON object with post type as key, then 1 for the value
// * to enable images, and 0 to disable.
// *
// * {
// *    "pages": 0, // Disable featured images on pages.
// *    "posts": 1  // Enable featured images on posts.
// * }
// *
// * Returns an array of all post types that now have featured images enabled
// * after the update is applied. For the above example, assuming no other post
// * types have `beans-singular-images` support:
// *
// * [ "posts" ]
// *
// * @since 3.1.0
// */
//function set_singular_images() {
//	\register_rest_route(
//		'beans/v1',
//		'/singular-images',
//		[
//			'methods'             => 'PUT',
//			'callback'            => function( $request ) {
//				$post_types = $request->get_json_params();
//
//				foreach ( $post_types as $type => $value ) {
//					$beans_options = get_option( GENESIS_SETTINGS_FIELD );
//
//					$beans_options[ "show_featured_image_{$type}" ] = $value;
//					update_option( GENESIS_SETTINGS_FIELD, $beans_options );
//				}
//
//				return \beans_post_types_with_singular_images_enabled();
//
//			},
//			'permission_callback' => function() {
//				return current_user_can( 'edit_theme_options' );
//			},
//		]
//	);
//}
//

//add_action( 'rest_api_init', __NAMESPACE__ . '\\get_reading_settings' );
///**
// * Presents show_on_front, page_on_front, and page_for_posts settings.
// *
// * These settings are not currently offered by the WordPress REST API. We could
// * switch to `wp` endpoints once the settings are exposed there.
// *
// * Example: `curl https://example.com/wp-json/beans/v1/reading-settings`
// *
// * Example response:
// *
// * {"show_on_front":"page","page_on_front":123,"page_for_posts":456}
// *
// * @since 3.1.0
// */
//function get_reading_settings() {
//	\register_rest_route(
//		'beans/v1',
//		'/reading-settings',
//		[
//			'methods'  => 'GET',
//			'callback' => function() {
//				return [
//					'show_on_front'  => \get_option( 'show_on_front' ),
//					'page_on_front'  => (int) \get_option( 'page_on_front' ),
//					'page_for_posts' => (int) \get_option( 'page_for_posts' ),
//				];
//			},
//		]
//	);
//}
