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
require_once "rest.php";
require_once "insert_default_settings.php";

/**
 * Gets breadcrumb options that are enabled in option bean_breadcrumbs.
 *
 * @since 2.0.0
 *
 * @return array The breadcrumb options that are enabled.
 */
function beans_breadcrumb_options_enabled(){
	$options = get_option('bean_breadcrumbs');
	$active_breadcrumb_types = array_filter(
		$options,
		function ( $value, $option_name ) {
			return $value;
		},
		ARRAY_FILTER_USE_BOTH
	);

	return array_keys( $active_breadcrumb_types );
}

/**
 * Gets the breadcrumb options defined (Both enabled and disabled)
 *
 * @since 2.0.0
 * @return array The breadcrumb options
 */
function beans_breadcrumb_options(){
	return array(
		'single',
		'page',
		'archive',
		'404'
	);
}


/**
 * Are breadcrumbs hidden for the current page?
 *
 * Indicates that the “Hide breadcrumbs” checkbox is enabled and checked.
 * Sidebar is considered source of truth.
 *
 * @since 2.0.0
 *
 * @return bool True if breadcrumbs are hidden, false otherwise.
 */
function beans_breadcrumbs_hidden_on_current_page() {
	return apply_filters( 'beans_breadcrumbs_toggle_enabled', get_post_meta( get_queried_object_id(), '_beans_hide_breadcrumbs', true ) );
}



/**
 * Are breadcrumbs disabled for the current page type?
 *
 * This is defined by the option bean_breadcrumbs
 *
 * @since 2.0.0
 *
 * @return bool True if breadcrumbs are disabled, false otherwise.
 */
function beans_breadcrumbs_disabled_on_current_page() {

	$options = get_option('bean_breadcrumbs');

	return ( is_single() && ! $options[ 'single' ] )
		|| ( is_page() && ! $options[  'page' ] && ! is_front_page() )
		|| ( is_404() && ! $options[  '404' ] )
		|| ( ( is_archive() || is_search() ) && ! $options[  'archive' ] );
}

/**
 * Builds the breadcrumbs based on the page.
 *
 * @since 2.0.0
 *
 * @return false -> if not allowed, or array of crumbs.
 */
function beans_get_breadcrumbs(){

	// Breadcrumbs not supported for home or front page.
	if ( is_home() || is_front_page() ) {
		return;
	}

	// Sidebar check
	if( beans_breadcrumbs_hidden_on_current_page() ){
		return;
	}

	// OPtions check
	if( beans_breadcrumbs_disabled_on_current_page() ){
		return;
	}

	wp_reset_query(); // phpcs:ignore WordPress.WP.DiscouragedFunctions.wp_reset_query_wp_reset_query -- Ensure the main query has been reset to the original main query.

	global $post;

	$post_type                 = get_post_type();
	$breadcrumbs               = array();
	$breadcrumbs[ home_url() ] = __( 'Home', 'tm-beans' );

	// Custom post type.
	if ( ! in_array( $post_type, array( 'page', 'attachment', 'post' ), true ) && ! is_404() ) {

		$post_type_object = get_post_type_object( $post_type );

		if ( $post_type_object ) {
			$breadcrumbs[ get_post_type_archive_link( $post_type ) ] = $post_type_object->labels->name;
		}
	}

	// Single posts.
	if ( is_single() && 'post' === $post_type ) {

		foreach ( get_the_category( $post->ID ) as $category ) {
			$breadcrumbs[ get_category_link( $category->term_id ) ] = $category->name;
		}

		$breadcrumbs[] = get_the_title();
	} elseif ( is_singular() && ! is_home() && ! is_front_page() ) { // Pages/custom post type.
		$current_page = array( $post );

		// Get the parent pages of the current page if they exist.
		if ( isset( $current_page[0]->post_parent ) ) {
			while ( $current_page[0]->post_parent ) {
				array_unshift( $current_page, get_post( $current_page[0]->post_parent ) );
			}
		}

		// Add returned pages to breadcrumbs.
		foreach ( $current_page as $page ) {
			$breadcrumbs[ get_page_link( $page->ID ) ] = $page->post_title;
		}
	} elseif ( is_category() ) { // Categories.
		$breadcrumbs[] = single_cat_title( '', false );
	} elseif ( is_tax() ) { // Taxonomies.
		$current_term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );

		$ancestors = array_reverse( get_ancestors( $current_term->term_id, get_query_var( 'taxonomy' ) ) );

		foreach ( $ancestors as $ancestor ) {

			$ancestor = get_term( $ancestor, get_query_var( 'taxonomy' ) );

			$breadcrumbs[ get_term_link( $ancestor->slug, get_query_var( 'taxonomy' ) ) ] = $ancestor->name;
		}

		$breadcrumbs[] = $current_term->name;
	} elseif ( is_search() ) { // Searches.
		$breadcrumbs[] = __( 'Results:', 'tm-beans' ) . ' ' . get_search_query();
	} elseif ( is_author() ) { // Author archives.
		$author        = get_queried_object();
		$breadcrumbs[] = __( 'Author Archives:', 'tm-beans' ) . ' ' . $author->display_name;
	} elseif ( is_tag() ) {// Tag archives.
		$breadcrumbs[] = __( 'Tag Archives:', 'tm-beans' ) . ' ' . single_tag_title( '', false );
	} elseif ( is_date() ) { // Date archives.
		$breadcrumbs[] = __( 'Archives:', 'tm-beans' ) . ' ' . get_the_time( 'F Y' );
	} elseif ( is_404() ) { // 404.
		$breadcrumbs[] = __( '404', 'tm-beans' );
	}

	return $breadcrumbs;
}

