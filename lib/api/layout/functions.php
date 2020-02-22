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

 include_once "deprecated.php";

/**
 * Get the default layout ID.
 *
 * @deprecated 2.0.0
 * @updated 2.0.0 - Add Elvis operator to respect config beans_layout default value.
 * @since 1.0.0
 *
 *
 * @return string
 */
function beans_get_default_layout() {
	$default_layout = beans_get_customizer_default_value('beans_layout') ?: (beans_has_widget_area( 'sidebar_primary' ) ? 'c_sp' : 'c');

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
		$layouts = beans_get_default_selected_layouts();

		if( get_post_type() && array_key_exists(get_post_type(),  $layouts)){
			$layout = $layouts[get_post_type()];
		} else {
			$layout = $layouts['archive'];
		}
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
 * Used by the rest API
 * 
 * @return json of default layout based on post type.
 */
function beans_get_default_selected_layouts(){
	return ( get_option( 'beans_default_selected_layouts' ))  ?: beans_get_default_layouts();
}

/**
 * Gets Beans' default layout
 *
 * @since 2.0.0
 *
 * @return array
 */
function beans_get_default_layouts(){

	$default_layouts = beans_get_config('layout')['default'];

	/**
	 * Filter the default layout ID.
	 *
	 * The default layout post and archive ID is set to "c_sp" (content + sidebar primary). If the sidebar primary is unregistered, then it is set to "c" (content only).
	 * The default page layout is set to "c"
	 *
	 * @since 2.0.0
	 *
	 * @param string $layout The default layout ID.
	 */
	return apply_filters( 'beans_default_layouts', $default_layouts );
}

/**
 * Generate layout elements used by Beans 'imageradio' option type.
 *
 * Added layout should contain a unique ID as the array key and a URL path to its related image
 * as the array value.
 *
 * @since 3.0.0
 * 
 *
 * @return array Layouts ready for Beans 'imageradio' option type.
 */
function beans_get_layout_options( ) {
	$base    = BEANS_ADMIN_ASSETS_URL . 'images/layouts/';
	$layouts = array(
		'c' => array(
			'icon'               => 'c',
			'src'                => $base . 'c.png',
			'alt'                => __( 'Full-Width Content Layout', 'tm-beans' ),
			'screen_reader_text' => __( 'Option for the Full-Width Content Layout.', 'tm-beans' ),
		),
	);

	

		$layouts['c_sp']['icon']                = 'cs';
		$layouts['c_sp']['src']                = $base . 'cs.png';
		$layouts['c_sp']['alt']                = __( 'Content and Primary Sidebar Layout', 'tm-beans' );
		$layouts['c_sp']['screen_reader_text'] = __( 'Option for the Content and Primary Sidebar Layout.', 'tm-beans' );

		$layouts['sp_c']['icon']                = 'sc';
		$layouts['sp_c']['src']                = $base . 'sc.png';
		$layouts['sp_c']['alt']                = __( 'Primary Sidebar and Content Layout', 'tm-beans' );
		$layouts['sp_c']['screen_reader_text'] = __( 'Option for the Primary Sidebar and Content Layout.', 'tm-beans' );
	
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

}
