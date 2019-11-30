<?php
/**
 * Beans
 *
 * Copy from Genesis.
 *
 * @package Beans\Framework
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */

/**
 * Silent skin for the WordPress Updater class.
 * Overrides the output functions so that no
 * text is printed to the screen during plugin installation.
 */
final class Beans_Silent_Upgrader_Skin extends WP_Upgrader_Skin {

	/**
	 * Overrides the parent method to prevent screen output.
	 *
	 * @param string $string Not used.
	 * @param mixed  ...$args Optional text replacements.
	 *
	 * @return bool
	 */
	public function feedback( $string, ...$args ) {
		return false;
	}

	/**
	 * Overrides the parent method to prevent screen output.
	 *
	 * @return bool
	 */
	public function header() {
		return false;
	}

	/**
	 * Overrides the parent method to prevent screen output.
	 *
	 * @return bool
	 */
	public function footer() {
		return false;
	}
}
