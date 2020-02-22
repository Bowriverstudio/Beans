<?php
/**
 * Generate layout elements used by Beans 'imageradio' option type.
 *
 * Added layout should contain a unique ID as the array key and a URL path to its related image
 * as the array value.
 *
 * @since 1.0.0
 * @deprecated¶ - In expermental themes, not 100% sure how sidebars are handled yet.
 
 * 
 * @param bool $add_default Optional. Whether the 'default_fallback' element is added or not.
 *
 * @return array Layouts ready for Beans 'imageradio' option type.
 */
function beans_get_layouts_for_options( $add_default = false ) {
	$base    = BEANS_ADMIN_ASSETS_URL . 'images/layouts/';
	$layouts = array(
		'c' => array(
			'icon'               => 'c',
			'src'                => $base . 'c.png',
			'alt'                => __( 'Full-Width Content Layout', 'tm-beans' ),
			'screen_reader_text' => __( 'Option for the Full-Width Content Layout.', 'tm-beans' ),
		),
	);

	// Add sidebar primary layouts if the primary widget area is registered.
	$has_primary = beans_has_widget_area( 'sidebar_primary' );

	if ( $has_primary ) {

		$layouts['c_sp']['icon']                = 'cs';
		$layouts['c_sp']['src']                = $base . 'cs.png';
		$layouts['c_sp']['alt']                = __( 'Content and Primary Sidebar Layout', 'tm-beans' );
		$layouts['c_sp']['screen_reader_text'] = __( 'Option for the Content and Primary Sidebar Layout.', 'tm-beans' );

		$layouts['sp_c']['icon']                = 'sc';
		$layouts['sp_c']['src']                = $base . 'sc.png';
		$layouts['sp_c']['alt']                = __( 'Primary Sidebar and Content Layout', 'tm-beans' );
		$layouts['sp_c']['screen_reader_text'] = __( 'Option for the Primary Sidebar and Content Layout.', 'tm-beans' );
	}

	// Add sidebar secondary layouts if the primary and secondary widget area are registered.
	if ( $has_primary && beans_has_widget_area( 'sidebar_secondary' ) ) {
		$layouts['c_sp_ss']['icon']                = 'css';
		$layouts['c_sp_ss']['src']                = $base . 'css.png';
		$layouts['c_sp_ss']['alt']                = __( 'Content, Primary Sidebar and Secondary Sidebar Layout', 'tm-beans' );
		$layouts['c_sp_ss']['screen_reader_text'] = __( 'Option for the Content, Primary Sidebar and Secondary Sidebar Layout.', 'tm-beans' );

		$layouts['sp_ss_c']['icon']                = 'ssc';
		$layouts['sp_ss_c']['src']                = $base . 'ssc.png';
		$layouts['sp_ss_c']['alt']                = __( 'Primary Sidebar, Secondary Sidebar and Content Layout', 'tm-beans' );
		$layouts['sp_ss_c']['screen_reader_text'] = __( 'Option for the Primary Sidebar, Secondary Sidebar and Content Layout.', 'tm-beans' );

		$layouts['sp_c_ss']['icon']                = 'scs';
		$layouts['sp_c_ss']['src']                = $base . 'scs.png';
		$layouts['sp_c_ss']['alt']                = __( 'Primary Sidebar, Content and Secondary Sidebar Layout', 'tm-beans' );
		$layouts['sp_c_ss']['screen_reader_text'] = __( 'Option for the Primary Sidebar, Content and Secondary Sidebar Layout.', 'tm-beans' );
	}

	/**
	 * Filter the layouts.
	 *
	 * - $c stands for content.
	 * - $sp stands for sidebar primary.
	 * - $ss stands for 'sidebar secondary.
	 *
	 * @since 1.0.0
	 *
	 * @param array $args An array of layouts.
	 */
	$layouts = apply_filters( 'beans_layouts', $layouts );

	return $layouts;


	if ( ! $add_default ) {
		return $layouts;
	}

	$layouts = array_merge(
		array(
			'default_fallback' => sprintf(
				// translators: The (%s) placeholder is for the "Modify" hyperlink.
				__( 'Use Default Layout (%s)', 'tm-beans' ),
				'<a href="' . admin_url( 'customize.php?autofocus[control]=beans_layout' ) . '">' . _x( 'Modify', 'Default layout', 'tm-beans' ) . '</a>'
			),
		),
		$layouts
	);
	return $layouts;
}



/**
 * Check if the given layout has a primary sidebar.
 *
 * @since 1.5.0
 *
 * @param string $layout The layout to check.
 *
 * @return bool
 */
function beans_has_primary_sidebar( $layout ) {

	if ( ! in_array( $layout, array( 'c_sp', 'sp_c', 'c_sp_ss', 'sp_c_ss', 'sp_ss_c' ), true ) ) {
		return false;
	}

	return beans_is_active_widget_area( 'sidebar_primary' );
}

/**
 * Check if the given layout has a secondary sidebar.
 *
 * @since 1.5.0
 *
 * @param string $layout The layout to check.
 *
 * @return bool
 */
function beans_has_secondary_sidebar( $layout ) {

	if ( ! in_array( $layout, array( 'c_ss', 'ss_c', 'c_sp_ss', 'sp_c_ss', 'sp_ss_c' ), true ) ) {
		return false;
	}

	return beans_is_active_widget_area( 'sidebar_secondary' );
}