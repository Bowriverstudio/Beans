<?php
/**
 * Functions for rest API.  Adapted from Genesis Framework.
 *
 * @package Beans\Framework\API\Rest
 * @since   2.0.0
 */
namespace Beans\Framework\API\Rest;


use function Beans\Admin\Onboarding\beans_get_onboarding_content;

add_action( 'rest_api_init', __NAMESPACE__ . '\\get_onboarding_content' );
/**
 * Add `singular-images` endpoint to the REST API.
 *
 * Returns an array of options with corresponding labels that can be called
 * via the 'beans_remove_action' function.
 *
 * Example Put - via postman
 * URL: http://example.com/wp-json/beans/v1/onboarding-content
 * Body:Raw -> json
 *   {"slug":"typography"}
 *
 * Example response:
 *
 * [
 *		"slug": "sample",
 *		"beans_post_title": "Title",
 *		"beans_footer_partial_template": "Footer Partial Template"
 *	]
 *
 * @since 2.0.0
 */
function get_onboarding_content() {
	\register_rest_route(
		'beans/v1',
		'/onboarding-content',
		[
			'methods' => 'PUT',
			'callback' => function ($request) {
				$types = $request->get_json_params();

				beans_get_onboarding_content('sss');


				return $types;

			},
			'permission_callback' => function () {
				return true;
				return current_user_can('edit_theme_options');
			},
		]
	);
}


