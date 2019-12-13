<?php
/**
 * Add Beans options to the WordPress Customizer.
 *
 * @package Beans\Framework\Admin
 *
 * @since   1.0.0
 */

beans_add_smart_action( 'customize_preview_init', 'beans_do_enqueue_wp_customize_assets' );
/**
 * Enqueue Beans assets for the WordPress Customizer.
 *
 * @since 1.0.0
 *
 * @return void
 */
function beans_do_enqueue_wp_customize_assets() {
	wp_enqueue_script(
		'beans-wp-customize-preview',
		BEANS_ADMIN_JS_URL . 'wp-customize-preview.js',
		array(
			'jquery',
			'customize-preview',
		),
		BEANS_VERSION,
		true
	);
}

//beans_add_smart_action( 'customize_register', 'beans_do_register_wp_customize_options' );
/**
 * Add Beans options to the WordPress Customizer.
 *
 * @since 1.0.0
 *
 * @return void
 */
function beans_do_register_wp_customize_options() {
	$fields = array(
		array(
			'id'    => 'beans_logo_image',
			'label' => __( 'Logo Image', 'tm-beans' ),
			'type'  => 'WP_Customize_Image_Control',
		),
	);

	beans_register_wp_customize_options( $fields, 'title_tagline', array( 'title' => __( 'Branding', 'tm-beans' ) ) );

	// Get layout option without default for the count.
	$options = beans_get_layouts_for_options();

	// Only show the layout options if more than two layouts are registered.
	if ( count( $options ) > 2 ) {
		$fields = array(
			array(
				'id'      => 'beans_layout',
				'label'   => __( 'Default Layout', 'tm-beans' ),
				'type'    => 'radio',
				'default' => 'c', //beans_get_default_layout(),
				'options' => $options,
			),
		);
// @TODO BUG - Adding this stops custimizer from rendering.
//
//		beans_register_wp_customize_options(
//			$fields,
//			'beans_layout',
//			array(
//				'title'    => __( 'Default Layout', 'tm-beans' ),
//				'priority' => 1000,
//			)
//		);
	}

	// Display full content or excerpts on the blog and archives ---------
	// Copied from Theme 2020

	$fields = array(
		// @TODO - Option not showing up.
		array(
			'id'      => 'blog_content',
			'label'   => __( 'On archive pages, posts show:', 'tm-beans' ),
			'type'    => 'radio',
			'default' => 'full',
			'choices'  => array(
				'full'    => __( 'Full text', 'twentytwenty' ),
				'summary' => __( 'Summary', 'twentytwenty' ),
			),
		),
// TODO - add to REST API later on.
//		array(
//			'id'      => '_beans_hide_breadcrumbs',
//			'label'   => __( 'Hide Breadcrumbs Site Wide', 'tm-beans' ),
//			'type'    => 'checkbox',
//			'default' => false,
//		),
	);
	beans_register_wp_customize_options(
		$fields,
		'theme_options',
		array(
			'title'    => __( 'Theme Options', 'tm-beans' ),
			'priority' => 1010,
		)
	);






	$fields = array(
		array(
			'id'          => 'beans_viewport_width_group',
			'label'       => __( 'Viewport Width - for Previewing Only', 'tm-beans' ),
			'description' => __( 'Slide left or right to change the viewport width. Publishing will not change the width of your website.', 'tm-beans' ),
			'type'        => 'group',
			'transport'   => 'postMessage',
			'fields'      => array(
				array(
					'id'      => 'beans_enable_viewport_width',
					'label'   => __( 'Enable to change the viewport width.', 'tm-beans' ),
					'type'    => 'activation',
					'default' => false,
				),
				array(
					'id'       => 'beans_viewport_width',
					'type'     => 'slider',
					'default'  => 1000,
					'min'      => 300,
					'max'      => 2500,
					'interval' => 10,
					'unit'     => 'px',
				),
			),
		),
		array(
			'id'          => 'beans_viewport_height_group',
			'label'       => __( 'Viewport Height - for Previewing Only', 'tm-beans' ),
			'description' => __( 'Slide left or right to change the viewport height. Publishing will not change the height of your website.', 'tm-beans' ),
			'type'        => 'group',
			'transport'   => 'postMessage',
			'fields'      => array(
				array(
					'id'      => 'beans_enable_viewport_height',
					'label'   => __( 'Enable to change the viewport height.', 'tm-beans' ),
					'type'    => 'activation',
					'default' => false,
				),
				array(
					'id'       => 'beans_viewport_height',
					'type'     => 'slider',
					'default'  => 1000,
					'min'      => 300,
					'max'      => 2500,
					'interval' => 10,
					'unit'     => 'px',
				),
			),
		),
	);

	beans_register_wp_customize_options(
		$fields,
		'beans_preview',
		array(
			'title'    => __( 'Preview Tools', 'tm-beans' ),
			'priority' => 1010,
		)
	);
}


// TODO Get this to work: https://www.getbeans.io/documentation/field-types/
// Needs to support all breadcrumbs.
//beans_add_smart_action( 'customize_register', 'beans_do_register_wp_customize_breadcrumbs_options' );
/**
 * Add Beans options to the WordPress Customizer.
 *
 * @since 1.0.0
 *
 * @return void
 */
function beans_do_register_wp_customize_breadcrumbs_options() {



	$fields = array(
		'id' => 'group_id',
		'label' => 'Field label',
		'description' => 'Field description',
		'type' => 'group',
		'db_group' => true, // Whether the group value should be saved together as an array in the db or not.
		'fields' => array( // Array of fields as they would be registered individually.
			array(
				'id' => 'field_id',
				'label' => 'Field label',
				'type' => 'text',
				'default' => ''
			),
			array(
				'id' => 'field_id2',
				'label' => 'Field label',
				'type' => 'textarea',
				'default' => ''
			),
			// ...
		)
	);


	beans_register_wp_customize_options(
		$fields,
		'theme_options',
		array(
			'title'    => __( 'Theme Options', 'tm-beans' ),
			'priority' => 1010,
		)
	);

}


beans_add_smart_action( 'customize_register', 'beans_do_register_wp_customize_document_head_options' );
/**
 * Add Document Head options to the WordPress Customizer.
 *
 * @since 2.0.0
 *
 * @return void
 */
function beans_do_register_wp_customize_document_head_options() {

	$fields = array(
		array(
			'id'      => 'beans_head_adjacent_posts_rel_link',
			'label'    => __( 'Adjacent Posts rel link tags', 'tm-beans' ),
			'type'    => 'checkbox',
			'default' => false,
		),
		array(
			'id'      => 'beans_head_wlwmanifest_link',
			'label'    => __( 'Include Windows Live Writer Support Tag?', 'tm-beans' ),
			'type'    => 'checkbox',
			'default' => false,
		),
		array(
			'id'      => 'beans_head_shortlink',
			'label'    => __( 'Include Shortlink Tag?', 'tm-beans' ),
			'type'    => 'checkbox',
			'default' => false,
		),
		array(
			'id'      => 'beans_wp_generator',
			'label'    => __( 'Displays the XHTML generator?', 'tm-beans' ),
			'description' => __('Removes the  tag &lt;meta name="generator" content="WordPress version"&gt;', 'tm-beans' ),
			'type'    => 'checkbox',
			'default' => false,
		),
	);

	beans_register_wp_customize_options(
		$fields,
		'beans_document_head',
		array(
			'title'    => __( 'Document Head', 'tm-beans' ),
			'description' => __( 'By default, WordPress places several tags in your document title. Most of these tags are completely unnecessary, and provide no SEO value whatsoever; they just make your site slower to load. Choose which tags you would like included in your document title. If you do not know what something is, leave it unchecked.', 'tm-beans' ),
			'priority' => 1010,
		)
	);
}
