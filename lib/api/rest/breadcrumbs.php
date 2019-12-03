<?php
///**
// * Functions for Breadcrums rest API.  Adapted from Genesis Framework.
// *
// * @package Beans\Framework\API\Rest
// * @since   2.0.0
// */
//namespace Beans\Framework\API\Rest;
//
//add_action( 'rest_api_init', __NAMESPACE__ . '\\get_breadcrumbs' );
///**
// * Add `breadcrumbs` endpoint to the REST API.
// *
// * Returns an array of options that have breadcrumbs enabled.
// *
// * Example: `curl https://example.com/wp-json/beans/v1/breadcrumbs`
// *
// * Example response: [ "breadcrumb_single", "breadcrumb_page" ]
// *
// * @since 3.1.0
// */
//function get_breadcrumbs() {
//	\register_rest_route(
//		'beans/v1',
//		'/breadcrumbs',
//		[
//			'methods'  => 'GET',
//			'callback' => '\\'.__NAMESPACE__.'\beans_breadcrumb_options_enabled',
//		]
//	);
//}
//
//add_action( 'rest_api_init', __NAMESPACE__ . '\\set_breadcrumbs' );
///**
// * Update breadcrumbs state to turn breadcrumb output on or off for
// * the provided option type.
// *
// * Expects to receive a JSON object with breadcrumb type as key,
// * then 1 for the value to enable breadcrumbs, and 0 to disable.
// *
// * {
// *    "breadcrumb_front_page": 0, // Disable breadcrumbs on the front page.
// *    "breadcrumb_single": 1      // Enable breadcrumbs on posts.
// *    "breadcrumb_page": 1        // Enable breadcrumbs on pages.
// * }
// *
// * Returns an array of all options that now have breadcrumbs enabled after
// * the update is applied. For the above example, assuming no other breadcrumbs
// * are enabled:
// *
// * [ "breadcrumb_single", "breadcrumb_page" ]
// *
// * @since 3.1.0
// */
//function set_breadcrumbs() {
//	\register_rest_route(
//		'beans/v1',
//		'/breadcrumbs',
//		[
//			'methods'             => 'PUT',
//			'callback'            => function( $request ) {
//				$types           = $request->get_json_params();
//				$beans_options = get_option( GENESIS_SETTINGS_FIELD );
//
//				foreach ( $types as $type => $value ) {
//					// Prevent updates of non-breadcrumb options via this endpoint.
//					if ( strpos( $type, 'breadcrumb_' ) !== 0 ) {
//						continue;
//					}
//
//					$beans_options[ $type ] = $value;
//				}
//
//				update_option( GENESIS_SETTINGS_FIELD, $beans_options );
//
//				return \beans_breadcrumb_options_enabled();
//
//			},
//			'permission_callback' => function() {
//				return current_user_can( 'edit_theme_options' );
//			},
//		]
//	);
//}
//
///**
// *
// *
// * @return array
// */
//function beans_breadcrumb_options_enabled(){
//	return "hello";
//}
