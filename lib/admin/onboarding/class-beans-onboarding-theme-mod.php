<?php
/**
 * This class handles the theme mod onboarding.
 *
 * @package Beans\Framework\Admin\Onboarding
 *
 * @since 2.0.0
 */


namespace Beans\Admin\Onboarding;

final class _Beans_Admin_Onboarding_Theme_Mod
{
	public function onboarding_theme_mods()
	{
		$config = _beans_onboarding_config();
		return isset($config['theme_mod']) ? (array)$config['theme_mod'] : [];
	}


	/**
	 * Beans Widget content.
	 *
	 * @return void
	 * @since 2.0.0
	 *
	 */
	public function display()
	{
		echo __( '<h3>Theme Mods</h3>');
		printf( '<p>There is a total of %s theme-mods defined for importing.</p>', sizeof(self::onboarding_theme_mods()));
	}


	/**
	 * Inserts theme_mods from the onboarding config file.
	 *
	 * @since 2.0.0
	 *
	 */
	public function import( ) {
		$theme_mods = self::onboarding_theme_mods();

		foreach($theme_mods as $theme_mod => $value){
			set_theme_mod($theme_mod, $value);
		}
	}


}

