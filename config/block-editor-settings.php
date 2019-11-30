<?php
/**
 * Default Block Editor settings for Beans - Can be over writable in the child theme.
 *
 * @package Beans\Config
 */

return array(
	'editor-color-palette' => array(
		array(
			'name'  => __( 'Primary', 'tm-beans' ),
			'slug'  => 'primary',
			'color' => '#2d7091',
		),
		array(
			'name'  => __( 'Muted', 'tm-beans' ),
			'slug'  => 'muted',
			'color' => '#999',
		),
		array(
			'name'  => __( 'Success', 'tm-beans' ),
			'slug'  => 'success',
			'color' => '#659f13',
		),
		array(
			'name'  => __( 'Warning', 'tm-beans' ),
			'slug'  => 'warning',
			'color' => '#e28327',
		),
		array(
			'name'  => __( 'Danger', 'tm-beans' ),
			'slug'  => 'danger',
			'color' => '#d85030',
		),
		array(
			'name'  => __( 'Dark Gray', 'tm-beans' ),
			'slug'  => 'dark-gray',
			'color' => '#111',
		),
		array(
			'name'  => __( 'Light Gray', 'tm-beans' ),
			'slug'  => 'light-gray',
			'color' => '#767676',
		),
		array(
			'name'  => __( 'White', 'tm-beans' ),
			'slug'  => 'white',
			'color' => '#FFF',
		),
	),
	'editor-font-sizes'    => array(
		array(
			'name'      => __( 'Small', 'tm-beans' ),
			'shortName' => __( 'S', 'tm-beans' ),
			'size'      => 10.5,
			'slug'      => 'small',
		),
		array(
			'name'      => __( 'Normal', 'tm-beans' ),
			'shortName' => __( 'M', 'tm-beans' ),
			'size'      => 14,
			'slug'      => 'normal',
		),
		array(
			'name'      => __( 'Large', 'tm-beans' ),
			'shortName' => __( 'L', 'tm-beans' ),
			'size'      => 17.5,
			'slug'      => 'large',
		),
		array(
			'name'      => __( 'Larger', 'tm-beans' ),
			'shortName' => __( 'XL', 'tm-beans' ),
			'size'      => 21,
			'slug'      => 'larger',
		),
		array(
			'name'      => __( 'Huge', 'tm-beans' ),
			'shortName' => __( 'XXL', 'tm-beans' ),
			'size'      => 28,
			'slug'      => 'huge',
		),
	),
);
