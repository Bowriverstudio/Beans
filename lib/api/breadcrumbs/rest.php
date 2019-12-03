<?php
/**
 * Functions for Breadcrumbs rest API.  Adapted from Genesis Framework.
 *
 * @package Beans\Framework\API\Rest
 * @since   2.0.0
 */
namespace Beans\Framework\API\Breadcrumbs;

add_action( 'rest_api_init', __NAMESPACE__ . '\\get_breadcrumbs' );
/**
 * Add `breadcrumbs` endpoint to the REST API.
 *
 * Returns an array of options that have breadcrumbs enabled.
 *
 * Example: `curl https://example.com/wp-json/beans/v1/breadcrumbs`
 *
 * Example response: [ "single", "page" ]
 *
 * wp package install wp-cli/restful
 *
 *
 * @since 2.0.0
 */
function get_breadcrumbs() {
	\register_rest_route(
		'beans/v1',
		'/breadcrumbs',
		[
			'methods'  => 'GET',
			'callback' => '\beans_breadcrumb_options_enabled',
		]
	);
}

add_action( 'rest_api_init', __NAMESPACE__ . '\\set_breadcrumbs' );
/**
 * Update breadcrumbs state to turn breadcrumb output on or off for
 * the provided option type.
 *
 * Expects to receive a JSON object with breadcrumb type as key,
 * then 1 for the value to enable breadcrumbs, and 0 to disable.
 *
 * {
 *    "single": 1      // Enable breadcrumbs on posts.
 *    "page": 0        // Disable breadcrumbs on pages.
 * }
 *
 * Returns an array of all options that now have breadcrumbs enabled after
 * the update is applied. For the above example, assuming no other breadcrumbs
 * are enabled:
 *
 * [ "single" ]
 *
 * @since 2.0.0
 */
function set_breadcrumbs() {
	\register_rest_route(
		'beans/v1',
		'/breadcrumbs',
		[
			'methods'             => 'PUT',
			'callback'            => function( $request ) {
				$types           = $request->get_json_params();
				$bean_breadcrumbs_option = get_option( 'bean_breadcrumbs' );
				$all_options = beans_breadcrumb_options();

				if( isset($types) && is_array($types) ){
					foreach ( $types as $type => $value ) {
						if( in_array($type, $all_options )){
							$bean_breadcrumbs_option[$type] = $value;
						}
					}
				}
				update_option( 'bean_breadcrumbs', $bean_breadcrumbs_option );

				return \beans_breadcrumb_options_enabled();

			},
			'permission_callback' => function() {
				return true;
				return current_user_can( 'edit_theme_options' );
			},
		]
	);
}

