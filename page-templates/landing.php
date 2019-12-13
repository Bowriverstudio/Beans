<?php
/**
 * Beans.
 *
 * This file adds the landing page template to the Beans Theme.
 *
 * This is only available if the child theme add_theme_support beans-template-landing-page

 *
 * Template Name: Landing
 * Template Post Type: post, page
 *
 */


beans_remove_action( 'beans_header_partial_template' );
beans_remove_action( 'beans_breadcrumb' );
beans_remove_action( 'beans_post_title' );
beans_remove_action( 'beans_footer_partial_template' );
beans_remove_action( 'beans_post_navigation' );
beans_remove_action( 'beans_post_meta_categories' );


beans_load_document();
