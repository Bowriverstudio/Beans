<?php
/**
 * Functions for rest API.  Adapted from Genesis Framework.
 *
 * @package Beans\Framework\API\Rest
 * @since   2.0.0
 */

namespace Beans\Framework\API\Rest;

add_action('rest_api_init', __NAMESPACE__ . '\\get_color_scheme_options');
/**
 * Add `color_scheme_options` endpoint to the REST API.
 *
 * Returns an array of options with corresponding labels that can be called
 * via the 'beans_remove_action' function.
 *
 * Example: `curl https://example.com/wp-json/beans/v1/color_scheme_options`
 *
 * Example response:
 * *
 * @since 2.0.0
 */
function get_color_scheme_options()
{
	\register_rest_route(
		'beans/v1',
		'/color_scheme_options',
		[
			'methods' => 'GET',
            'callback' => function ($request) {
				// $types = $request->get_json_params();
                
                // Should get wp-content/bootswatch/color-schemes.json + 
                // wp-content/bootswatch/src/scss/color-schemes/darkly/colors.json -> primary
                // Constant CHILD_PATH will be useful here.  

				return "Hello World";

            }
            ]		
	);
}

