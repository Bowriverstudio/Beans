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
		'beans_header_partial_template' => array(
			'key' => 'beans_header_partial_template',
			'label' => __('Header Partial Template', 'tm-beans'),
		),
		'beans_breadcrumb' => array(
			'key' => 'beans_breadcrumb',
			'label' => __('Breadcrumb', 'tm-beans'),
		),
		'beans_post_title' => array(
			'key' => 'beans_post_title',
			'label' => __('Title', 'tm-beans'),
		),

		'beans_post_meta' => array(
			'key' => 'beans_post_meta',
			'label' => __('Post Meta', 'tm-beans'),
		),

		'beans_post_image' => array(
			'key' => 'beans_post_image',
			'label' => __('Featured Image', 'tm-beans'),
		),

		'beans_post_meta_categories' => array(
			'key' => 'beans_post_meta_categories',
			'label' => __('Post Categories', 'tm-beans'),
		),

		'beans_post_navigation' => array(
			'key' => 'beans_post_navigation',
			'label' => __('Pagination', 'tm-beans'),
		),
		'beans_footer_partial_template' => array(
			'key' => 'beans_footer_partial_template',
			'label' => __('Footer Partial Template', 'tm-beans'),
		),
	),
	'settings' => array(
//		'beans_header_partial_template' => 0,
//		'beans_breadcrumb' => 0,
//		'beans_post_title' => 0,
//		'beans_footer_partial_template' => 0,
	)
);
