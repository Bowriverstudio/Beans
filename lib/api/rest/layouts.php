<?php
/**
 * Functions for rest API.  Adapted from Genesis Framework.
 *
 * @package Beans\Framework\API\Rest
 * @since   2.0.0
 */

namespace Beans\Framework\API\Rest;


add_action('rest_api_init', __NAMESPACE__ . '\\get_layout_options');
/**
 * Add `layout-options` endpoint to the REST API.
 *
 * Returns an array of options with corresponding labels that can be called
 * via the 'beans_remove_action' function.
 *
 * Example: `curl https://example.com/wp-json/beans/v1/layout-options`
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
function get_layout_options()
{
	\register_rest_route(
		'beans/v1',
		'/layout-options',
		[
			'methods' => 'GET',
			'callback' => '\beans_get_layout_options',
		]
	);
}


add_action('rest_api_init', __NAMESPACE__ . '\\get_default_layout');
/**
 * Add `layout-default` endpoint to the REST API.
 *
 * Returns an array of options with corresponding labels that can be called
 * via the 'beans_remove_action' function.
 *
 * Example: `curl https://example.com/wp-json/beans/v1/layout-default`
 *
 * Example response:
 *
 * "c": {
 *       "icon": "c",
 *       "src": "http://beansbootstrap.test/wp-content/themes/Beans/lib/admin/assets/images/layouts/c.png",
 *       "alt": "Full-Width Content Layout",
 *       "screen_reader_text": "Option for the Full-Width Content Layout."
 *   } 
 * 
 * @since 3.0.0
 */
function get_default_layout()
{
	\register_rest_route(
		'beans/v1',
		'/layout-default',
		[
			'methods' => 'GET',
			'callback' => '\beans_get_default_layouts',
		]
	);
}

add_action('rest_api_init', __NAMESPACE__ . '\\get_default_selected_layouts');
/**
 * Add `layout-default-selected` endpoint to the REST API.
 *
 * Returns an array of the default layouts based on post type.
 *
 *
 * Example response:
 *
 * "c": {
 *       "icon": "c",
 *       "src": "http://beansbootstrap.test/wp-content/themes/Beans/lib/admin/assets/images/layouts/c.png",
 *       "alt": "Full-Width Content Layout",
 *       "screen_reader_text": "Option for the Full-Width Content Layout."
 *   } 
 * 
 * @since 3.0.0
 */
function get_default_selected_layouts()
{
	\register_rest_route(
		'beans/v1',
		'/layout-default-selected',
		[
			'methods' => 'GET',
			'callback' => '\beans_get_default_selected_layouts',
		]
	);
}


add_action('rest_api_init', __NAMESPACE__ . '\\set_default_layout');
/**
 * Update breadcrumbs state to turn breadcrumb output on or off for
 * the provided option type.
 *
 * Expects to receive a JSON object with breadcrumb type as key,
 * then 1 for the value to enable breadcrumbs, and 0 to disable.
 *
{
"post": "sp_c" ,
"page": "sp_c_ss"
} *
 * Returns an array of all options that now have breadcrumbs enabled after
 * the update is applied. For the above example, assuming no other breadcrumbs
 * are enabled:
 *
 * [ "single" ]
 *
 * @since 2.0.0
 */
function set_default_layout()
{
	\register_rest_route(
		'beans/v1',
		'/layout-default',
		[
			'methods' => 'PUT',
			'callback' => function ($request) {
				$types = $request->get_json_params();
				$layouts = \beans_get_default_selected_layouts();

				if (isset($types) && is_array($types)) {
					foreach ($types as $type => $value) {
						$layouts[$type] = $value;
					}
				}
				update_option('beans_default_selected_layouts', $layouts);

				return \beans_get_default_selected_layouts();

			},
			'permission_callback' => function () {
				return true;
				return current_user_can('edit_theme_options');
			},
		]
	);
}
