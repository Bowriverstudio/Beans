<?php
namespace Beans\Framework\API\Rest;

add_action('rest_api_init', __NAMESPACE__ . '\\get_container_options');
/**
 * Add `layout-options` endpoint to the REST API.
 *
 * Returns an array of options with corresponding labels that can be called
 * via the 'beans_remove_action' function.
 *
 * Example: `curl https://example.com/wp-json/beans/v1/containers`
 *
 * Example response:
 *
 * [
 *        "beans_header_partial_template": "Header Partial Template",
 *        "beans_post_title": "Title",
 *        "beans_footer_partial_template": "Footer Partial Template"
 *    ]
 *
 * @since 2.0.0
 */
function get_container_options()
{
    \register_rest_route(
        'beans/v1',
        '/containers',
        [
            'methods' => 'GET',
            'callback' => function ($request) {
                return apply_filters('beans_get_container_options', false);
            }
        ]
    );
}
