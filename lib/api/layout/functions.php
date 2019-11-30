<?php
/**
 * The Beans Layout API controls what and how Beans main section elements are displayed.
 *
 * Layouts are:
 *      - "c" - content only
 *      - "c_sp" - content + sidebar primary
 *      - "sp_c" - sidebar primary + content
 *      - "c_ss" - content + sidebar secondary
 *      - "c_sp_ss" - content + sidebar primary + sidebar secondary
 *      - "ss_c" - sidebar secondary + content
 *      - "sp_ss_c" - sidebar primary + sidebar secondary + content
 *      - "sp_c_ss" - sidebar primary + content + sidebar secondary
 *
 * @package Beans\Framework\API\Layout
 *
 * @since   1.5.0
 */

/**
 * Get the default layout ID.
 *
 * @since 1.0.0
 *
 * @return string
 */
function beans_get_default_layout() {
	$default_layout = beans_has_widget_area( 'sidebar_primary' ) ? 'c_sp' : 'c';

	/**
	 * Filter the default layout ID.
	 *
	 * The default layout ID is set to "c_sp" (content + sidebar primary). If the sidebar primary is unregistered, then it is set to "c" (content only).
	 *
	 * @since 1.0.0
	 *
	 * @param string $layout The default layout ID.
	 */
	return apply_filters( 'beans_default_layout', $default_layout );
}

/**
 * Get the current web page's layout ID.
 *
 * @since 1.0.0
 *
 * @return string
 */
function beans_get_layout() {

	if ( is_singular() ) {
		$layout = beans_get_post_meta( 'beans_layout' );
	} elseif ( is_home() ) {
		$posts_page = (int) get_option( 'page_for_posts' );
		if ( 0 !== $posts_page ) {
			$layout = beans_get_post_meta( 'beans_layout', false, $posts_page );
		}
	} elseif ( is_category() || is_tag() || is_tax() ) {
		$layout = beans_get_term_meta( 'beans_layout' );
	}

	// When the layout is not found or is set to "default_fallback", use the theme's default layout.
	if ( ! isset( $layout ) || ! $layout || 'default_fallback' === $layout ) {
		$layout = get_theme_mod( 'beans_layout', beans_get_default_layout() );
	}

	/**
	 * Filter the web page's layout ID.
	 *
	 * @since 1.0.0
	 *
	 * @param string $layout The layout ID.
	 */
	return apply_filters( 'beans_layout', $layout );
}

/**
 * Generate layout elements used by Beans 'imageradio' option type.
 *
 * Added layout should contain a unique ID as the array key and a URL path to its related image
 * as the array value.
 *
 * @since 1.0.0
 *
 * @param bool $add_default Optional. Whether the 'default_fallback' element is added or not.
 *
 * @return array Layouts ready for Beans 'imageradio' option type.
 */
function beans_get_layouts_for_options( $add_default = false ) {
	$base    = BEANS_ADMIN_ASSETS_URL . 'images/layouts/';
	$layouts = array(
		'c' => array(
			'src'                => $base . 'c.png',
			'alt'                => __( 'Full-Width Content Layout', 'tm-beans' ),
			'screen_reader_text' => __( 'Option for the Full-Width Content Layout.', 'tm-beans' ),
		),
	);

	// Add sidebar primary layouts if the primary widget area is registered.
	$has_primary = beans_has_widget_area( 'sidebar_primary' );

	if ( $has_primary ) {
		$layouts['c_sp']['src']                = $base . 'cs.png';
		$layouts['c_sp']['alt']                = __( 'Content and Primary Sidebar Layout', 'tm-beans' );
		$layouts['c_sp']['screen_reader_text'] = __( 'Option for the Content and Primary Sidebar Layout.', 'tm-beans' );

		$layouts['sp_c']['src']                = $base . 'sc.png';
		$layouts['sp_c']['alt']                = __( 'Primary Sidebar and Content Layout', 'tm-beans' );
		$layouts['sp_c']['screen_reader_text'] = __( 'Option for the Primary Sidebar and Content Layout.', 'tm-beans' );
	}

	// Add sidebar secondary layouts if the primary and secondary widget area are registered.
	if ( $has_primary && beans_has_widget_area( 'sidebar_secondary' ) ) {
		$layouts['c_sp_ss']['src']                = $base . 'css.png';
		$layouts['c_sp_ss']['alt']                = __( 'Content, Primary Sidebar and Secondary Sidebar Layout', 'tm-beans' );
		$layouts['c_sp_ss']['screen_reader_text'] = __( 'Option for the Content, Primary Sidebar and Secondary Sidebar Layout.', 'tm-beans' );

		$layouts['sp_ss_c']['src']                = $base . 'ssc.png';
		$layouts['sp_ss_c']['alt']                = __( 'Primary Sidebar, Secondary Sidebar and Content Layout', 'tm-beans' );
		$layouts['sp_ss_c']['screen_reader_text'] = __( 'Option for the Primary Sidebar, Secondary Sidebar and Content Layout.', 'tm-beans' );

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
