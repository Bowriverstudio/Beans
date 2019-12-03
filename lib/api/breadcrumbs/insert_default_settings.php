<?php
/**
 * Beans Breadcrumbs helpers.
 *
 * Breadcrumbs are stored in the option BEANS_BREADCRUMBS
 * Default for Breadcrumbs (1 -> show, 0 hide )
 *
 *   'single' => '1',
 *   'page' => '0',
 *   'archive' => '1',
 *   '404' => '0',
 *
 * @package Beans\Framework\API\Breadcrumbs
 *
 * @since   2.0.0
 */

namespace Beans\Framework\API\Breadcrumbs;


add_action('after_switch_theme', __NAMESPACE__ . '\insert_default_settings');
/**
 * Inserts the default Bean Breadcrumb settings values into the options table, if they don't already exist.
 *
 * @return bool True of setting added, false otherwise.
 * @since 2.0.0
 *
 */
function insert_default_settings()
{
	return add_option(
		'bean_breadcrumbs',
		beans_get_config('breadcrumbs')['visibility']
	);
}
