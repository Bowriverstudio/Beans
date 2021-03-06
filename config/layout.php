<?php
/**
 * Defaults for Layouts
 *
 * @package Beans\Config
 */
$has_primary = beans_has_widget_area( 'sidebar_primary' );

return array(
	'default' => array(
		'page' => 'c',
		'post' => ($has_primary ) ? 'c_sp' : 'c',
		'archive' => ($has_primary ) ? 'c_sp' : 'c',
	),

);

