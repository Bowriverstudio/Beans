<?php
/**
 * Ensures there is a beans's plugin installed that includes the frontend framework.
 *
 * @package Beans\Framework
 *
 * @since   1.7.0
 */

add_action( 'beans_before_init', 'beans_verify_frontend_framework');
/**
 * Ensures a frontend framework exists.
 *
 * As of 1.7.0 the html is built within a plugin allowing beans to be agnostic towards frontend frameworks.
 * @see https://github.com/Getbeans/Beans/issues/51
 *
 * @since 1.7.0
 *
 * @return void
 */
function beans_verify_frontend_framework(){

	// No Frontend Framework is defined - so cannot load beans.
	if( ! defined('BEANS_FRONTEND_FRAMEWORK' )){

		define( 'BEANS_STRUCTURE_PATH', false );
		define( 'BEANS_FRAGMENTS_PATH', false );

		add_action('beans_after_load_document','beans_after_load_document_no_frontend_framework');
	}
}

/**
 * TODO write description.
 */
function beans_after_load_document_no_frontend_framework(){
	wp_head();
	echo "TODO Write warning to install frontend plugin";
	wp_footer();
}

