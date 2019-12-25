<?php
/**
 * Prepare and initialize the Beans framework.
 *
 * @package Beans\Framework
 *
 * @since   1.0.0
 */
require_once dirname( __FILE__ ) . '/verify-frontend-framework.php';



add_action( 'beans_init', 'beans_define_constants', -1 );
/**
 * Define constants.
 *
 * @since 1.0.0
 * @ignore
 *
 * @return void
 */
function beans_define_constants() {
	// Define version.
	define( 'BEANS_VERSION', '1.7.0' );



	// Define paths and urls constants
	if ( ! defined( 'BEANS_THEME_PATH' ) ) {
		define( 'BEANS_THEME_PATH', wp_normalize_path( trailingslashit( get_template_directory() ) ) );
	}
	// Define urls.
	if ( ! defined( 'BEANS_THEME_URL' ) ) {
		define( 'BEANS_THEME_URL', trailingslashit( get_template_directory_uri() ) );
	}

	define( 'CHILD_PATH', wp_normalize_path( trailingslashit( get_stylesheet_directory() ) ) );
	define( 'CHILD_URL',  trailingslashit(get_stylesheet_directory_uri()));
	define( 'ONBOARDING_CONTENT_PATH', wp_normalize_path( trailingslashit( get_stylesheet_directory() . '/config/import/content' ) ) );
	define( 'ONBOARDING_IMPORT_PATH', wp_normalize_path( trailingslashit( get_stylesheet_directory() . '/config/import' ) ) );
	define( 'ONBOARDING_IMAGE_URL',  trailingslashit(get_stylesheet_directory_uri() .'/config/import/images'));

	define( 'BEANS_PATH', BEANS_THEME_PATH . 'lib/' );
	define( 'BEANS_API_PATH', BEANS_PATH . 'api/' );
	define( 'BEANS_ASSETS_PATH', BEANS_PATH . 'assets/' );
	define( 'BEANS_LANGUAGES_PATH', BEANS_PATH . 'languages/' );

	if( ! defined('BEANS_STRUCTURE_PATH' )) {
		define( 'BEANS_STRUCTURE_PATH', BEANS_TEMPLATES_PATH . 'structure/' );
	}
	if( ! defined('BEANS_FRAGMENTS_PATH' )) {
		define( 'BEANS_FRAGMENTS_PATH', BEANS_TEMPLATES_PATH . 'fragments/' );
	}





	define( 'BEANS_URL', BEANS_THEME_URL . 'lib/' );
	define( 'BEANS_API_URL', BEANS_URL . 'api/' );
	// TODO REMOVE
	define( 'BEANS_ADMIN_DOCUMENT_SETTING_PANEL_URL', BEANS_URL . 'admin/document-setting-panel/' );


	// Define admin paths.
	define( 'BEANS_ADMIN_PATH', BEANS_PATH . 'admin/' );

	// Define admin url.
	define( 'BEANS_ADMIN_URL', BEANS_URL . 'admin/' );
	define( 'BEANS_ADMIN_ASSETS_URL', BEANS_ADMIN_URL . 'assets/' );
	define( 'BEANS_ADMIN_JS_URL', BEANS_ADMIN_ASSETS_URL . 'js/' );
}

add_action( 'beans_init', 'beans_load_dependencies', -1 );
/**
 * Load dependencies.
 *
 * @since 1.0.0
 * @ignore
 *
 * @return void
 */
function beans_load_dependencies() {
	require_once BEANS_API_PATH . 'init.php';

	// Load the necessary Beans components.
	beans_load_api_components(
		array(
			'actions',
			'html',
			'term-meta',
			'post-meta',
			'image',
			'wp-customize',
			'compiler',
			'uikit',
			'template',
			'layout',
			'widget',
			'rest',
			'breadcrumbs',
			'wp-cli'
		)
	);

	// Add third party styles and scripts compiler support.
	beans_add_api_component_support( 'wp_styles_compiler' );
	beans_add_api_component_support( 'wp_scripts_compiler' );

	/**
	 * Fires after Beans API loads.
	 *
	 * @since 1.0.0
	 */
	do_action( 'beans_after_load_api' );
}


add_action( 'beans_init', 'beans_add_theme_support' );
/**
 * Add theme support.
 *
 * @since 1.0.0
 * @ignore
 *
 * @return void
 */
function beans_add_theme_support() {

	add_theme_support( 'title-tag' );
	add_theme_support( 'custom-background' );
	add_theme_support( 'menus' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
	add_theme_support(
		'custom-header',
		array(
			'width'       => 2000,
			'height'      => 500,
			'flex-height' => true,
			'flex-width'  => true,
			'header-text' => false,
		)
	);

	// Gutenberg Specific.
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'editor-styles' );


	$theme_supports = beans_get_config( 'theme-supports' );
	foreach ( $theme_supports as $feature => $args ) {
		if($args ){
			add_theme_support( $feature, $args );
		} else {
			add_theme_support( $feature );
		}
	}

	// Default hides the admin edit link
	add_filter( 'edit_post_link', '__return_empty_string' );


	// Adds support for editor font sizes.
	// Adds support for editor color palette.
	if ( is_admin() ) {
		$block_editor_settings = beans_get_config( 'block-editor-settings' );
		foreach ( $block_editor_settings as $key => $value ) {
			add_theme_support( $key, $value );
		}
	}


}

add_action( 'beans_init', 'beans_includes' );
/**
 * Include framework files.
 *
 * @modified 2.0.0 - removed hard dependency on uikit2
 * @since 1.0.0
 * @ignore
 *
 * @return void
 */
function beans_includes() {

	// Include admin.
	if ( is_admin() ) {
		require_once BEANS_ADMIN_PATH . 'editor/sidebar/functions.php';
		require_once BEANS_ADMIN_PATH . 'menu.php';
		require_once BEANS_ADMIN_PATH . 'onboarding/functions.php';
		require_once BEANS_ADMIN_PATH . 'options.php';
		require_once BEANS_ADMIN_PATH . 'theme-activation.php';
		require_once BEANS_ADMIN_PATH . 'theme-post-type-templates.php';
		require_once BEANS_ADMIN_PATH . 'updater.php';
		require_once BEANS_ADMIN_PATH . 'use-child-theme.php';
	}

	// Include customizer.
	if ( is_customize_preview() ) {
		require_once BEANS_ADMIN_PATH . 'wp-customize.php';
	}

	require_once BEANS_PATH . 'renderer/header.php';
	require_once BEANS_PATH . 'renderer/menu.php';


}

add_action( 'beans_init', 'beans_load_textdomain' );
/**
 * Load text domain.
 *
 * @since 1.0.0
 * @ignore
 *
 * @return void
 */
function beans_load_textdomain() {
	load_theme_textdomain( 'tm-beans', BEANS_LANGUAGES_PATH );
}

/**
 * Fires before Beans loads.
 *
 * @since 1.0.0
 */
do_action( 'beans_before_init' );

	/**
	 * Load Beans framework.
	 *
	 * @since 1.0.0
	 */
	do_action( 'beans_init' );

/**
 * Fires after Beans loads.
 *
 * @since 1.0.0
 */
do_action( 'beans_after_init' );




