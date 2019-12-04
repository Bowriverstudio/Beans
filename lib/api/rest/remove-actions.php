<?php
/**
 * Functions for rest API.  Adapted from Genesis Framework.
 *
 * @package Beans\Framework\API\Rest
 * @since   2.0.0
 */
namespace Beans\Framework\API\Rest;


add_action( 'rest_api_init', __NAMESPACE__ . '\\get_remove_actions_options' );
/**
 * Add `singular-images` endpoint to the REST API.
 *
 * Returns an array of options with corresponding labels that can be called
 * via the 'beans_remove_action' function.
 *
 * Example: `curl https://example.com/wp-json/beans/v1/remove-actions-options`
 *
 * Example response:
 *
 * [
 *		"beans_header_partial_template": "Header Partial Template",
 *		"beans_post_title": "Title",
 *		"beans_footer_partial_template": "Footer Partial Template"
 *	]
 *
 * @since 2.0.0
 */
function get_remove_actions_options() {
	\register_rest_route(
		'beans/v1',
		'/remove-actions-options',
		[
			'methods'  => 'GET',
			'callback' => '\beans_remove_action_options',
		]
	);
}


add_action( 'rest_api_init', __NAMESPACE__ . '\\get_remove_actions_options' );
/**
 * Add `singular-images` endpoint to the REST API.
 *
 * Returns an array of options with corresponding labels that can be called
 * via the 'beans_remove_action' function.
 *
 * Example: `curl https://example.com/wp-json/beans/v1/remove-actions-options`
 *
 * Example response:
 *
 * [
 *		"beans_header_partial_template": "Header Partial Template",
 *		"beans_post_title": "Title",
 *		"beans_footer_partial_template": "Footer Partial Template"
 *	]
 *
 * @since 2.0.0
 */
function get_remove_actions_enabled_options() {
	\register_rest_route(
		'beans/v1',
		'/remove-actions-options',
		[
			'methods'  => 'GET',
			'callback' => '\beans_remove_action_enabled_options',
		]
	);
}







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
//				$options = get_option('bean_featured_images');
//
//				foreach ( $post_types as $type => $value ) {
//
//					$options[ "show_featured_image_{$type}" ] = $value;
//					update_option( 'bean_featured_images', $options );
//				}
//
//				return \beans_post_types_with_singular_images_enabled();
//
//			},
//			'permission_callback' => function() {
//			return true;
//				return current_user_can( 'edit_theme_options' );
//			},
//		]
//	);
//}
//
//
////add_action( 'rest_api_init', __NAMESPACE__ . '\\get_reading_settings' );
/////**
//// * Presents show_on_front, page_on_front, and page_for_posts settings.
//// *
//// * These settings are not currently offered by the WordPress REST API. We could
//// * switch to `wp` endpoints once the settings are exposed there.
//// *
//// * Example: `curl https://example.com/wp-json/beans/v1/reading-settings`
//// *
//// * Example response:
//// *
//// * {"show_on_front":"page","page_on_front":123,"page_for_posts":456}
//// *
//// * @since 3.1.0
//// */
////function get_reading_settings() {
////	\register_rest_route(
////		'beans/v1',
////		'/reading-settings',
////		[
////			'methods'  => 'GET',
////			'callback' => function() {
////				return [
////					'show_on_front'  => \get_option( 'show_on_front' ),
////					'page_on_front'  => (int) \get_option( 'page_on_front' ),
////					'page_for_posts' => (int) \get_option( 'page_for_posts' ),
////				];
////			},
////		]
////	);
////}
