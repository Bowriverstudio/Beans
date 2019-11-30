<?php
/**
 * Functions for post meta.
 *
 * @package Beans\Framework\API\Post_Meta
 *
 * @since   1.0.0
 */

/**
 * Get the post's meta value.  When no post ID is given, get the current post's meta value.
 *
 * This function is a shortcut of {@link https://codex.wordpress.org/Function_Reference/get_post_meta get_post_meta()}.
 *
 * @since 1.0.0
 *
 * @param string     $meta_key The post meta ID searched.
 * @param mixed      $default  Optional. The default value to return of the post meta value doesn't exist.
 * @param int|string $post_id  Optional. Overwrite the current post ID.
 *
 * @return mixed Returns the meta value, if it exists; else, the default value is returned.
 */
function beans_get_post_meta( $meta_key, $default = false, $post_id = '' ) {

	if ( ! $post_id ) {
		$post_id = get_the_ID();

		if ( ! $post_id ) {
			$post_id = (int) beans_get( 'post' );
		}
	}

	if ( ! $post_id ) {
		return $default;
	}

	$post_meta = get_post_meta( $post_id );

	if ( isset( $post_meta[ $meta_key ] ) ) {
		return get_post_meta( $post_id, $meta_key, true );
	}

	return $default;
}

add_action('init', 'beans_register_block_post_meta');
/**
 * Temporary here - will use beans_register_post_meta function.
 *
 * Register post meta for Bean's Block Editor features.
 *
 * Meta must be registered to allow getting and setting via the REST API.
 *
 * Protecting fields by prefixing them with an underscore prevents them from
 * appearing in the Custom Fields meta box, where they would override changes
 * to the Block Editor Redux store.
 *
 * Passing '__return_true' for `auth_callback` allows the field to be updated
 * via the REST API even though it is protected.
 *
 * @since 2.0.0
 * @return null
 */
function beans_register_block_post_meta() {

	$args = [
		'auth_callback' => function() {
			return current_user_can('edit_posts');
		},
		'type'          => 'boolean',
		'single'        => true,
		'show_in_rest'  => true,
	];

	$string_args = array_merge( $args, [ 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field' ] );

	register_meta('post', 'beans_layout', $string_args);

	// Hide breadcrumbs: true if breadcrumbs should be hidden, false or empty otherwise.
	register_meta( 'post', '_beans_hide_breadcrumbs', $args );

}
