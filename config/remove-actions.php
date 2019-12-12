<?php
/**
 * Default for Remove Actions (1 -> remove action, 0 don't remove action ).
 *
 * In the hook init, these are called on a per post/page bases.
 *
 * @package Beans\Config
 */

return array(
	'options' => array(
		'beans_header_partial_template' => __('Header Partial Template', 'tm-beans'),
		'beans_breadcrumb' => __('Breadcrumb', 'tm-beans'),
		'beans_post_title' => __('Title', 'tm-beans'),
		'beans_post_meta' => __('Post Meta', 'tm-beans'),
		'beans_post_image' => __('Featured Image', 'tm-beans'),
		'beans_post_meta_categories' => __('Post Categories', 'tm-beans'),
		'beans_post_navigation' => __('Pagination', 'tm-beans'),
		'beans_footer_partial_template' => __('Footer Partial Template', 'tm-beans'),
	),
	'settings' => array(
//		'beans_header_partial_template' => 0,
//		'beans_breadcrumb' => 0,
//		'beans_post_title' => 0,
//		'beans_footer_partial_template' => 0,
	)
);
