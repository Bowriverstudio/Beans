<?php
/**
 * This class handles the theme mod onboarding.
 *
 * @package Beans\Framework\Admin\Onboarding
 *
 * @since 2.0.0
 */


namespace Beans\Admin\Onboarding;

final class _Beans_Admin_Onboarding_Options
{
	public function onboarding_options()
	{
		$config = _beans_onboarding_config();
		return isset($config['options']) ? (array)$config['options'] : [];
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
		echo __( '<h3>Options</h3>');
		printf( '<p>There is a total of %s options defined for importing.</p>', sizeof(self::onboarding_options()));
	}


	/**
	 * Inserts Options from the onboarding config file.
	 *
	 * @since 2.0.0
	 *
	 */
	public function import( ) {
		$options = self::onboarding_options();

		foreach($options as $option => $value){
			update_option($option, $value);
		}
	}


}

