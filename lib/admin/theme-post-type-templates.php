<?php
add_filter( 'theme_page_templates', 'beans_post_type_templates' );
add_filter( 'theme_post_templates', 'beans_post_type_templates' );
/**
 * Adds the landing page template only if the child theme supports it via the
 * add_theme_support beans-template-landing-page
 *
 * @param $templates
 * @return mixed
 */
function beans_post_type_templates( $templates ) {
	if( ! current_theme_supports( 'beans-template-landing-page' ) ){
		unset( $templates['page-templates/landing.php'] );
	}
	return $templates;
}

