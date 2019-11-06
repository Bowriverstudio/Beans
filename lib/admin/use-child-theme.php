<?php
/**
 * Beans Framework.
 *
 *
 * @package Beams\Framework
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/genesis/
 */

add_action( 'admin_notices', 'beans_use_child_theme_notice' );

/**
 * Display Warning that Beans should always be used with a child theme.
 *
 * @since 2.0.0
 */
function beans_use_child_theme_notice() {

	if ( is_child_theme() ) {
		return;
	}

	include BEANS_PATH . 'views/misc/use-child-theme-notice.php';
}
