<?php
/**
 * Add developer support for Beans via WP CLI
 *
 * Beans\Framework\API\WPCLI
 *
 * @since 2.0.0
 */
if ( defined( 'WP_CLI' ) && WP_CLI ) {

	/**
	 * Manage Beans Framework via cli.
	 */
	class Beans_WPCLI
	{

		/**
		 * Show commonly used Beans Constants
		 *
		 * ## Constants
		 *
		 * ## EXAMPLES
		 *
		 *  $ wp beans contants
		 *
		 * @subcommand constants
		 *
		 * @since 2.0.0
		 *
		 */
		public function constants()
		{
			$fields = array ( 'Constant', 'Value' );
			$items = array (
				array (
					'Constant' => 'BEANS_VERSION',
					'Value' => BEANS_VERSION,
				),
				array (
					'Constant' => 'BEANS_THEME_PATH',
					'Value' => BEANS_THEME_PATH,
				),
				array (
					'Constant' => 'BEANS_THEME_URL',
					'Value' => BEANS_THEME_URL,
				),
				array (
					'Constant' => 'CHILD_PATH',
					'Value' => CHILD_PATH,
				),
				array (
					'Constant' => 'CHILD_URL',
					'Value' => CHILD_URL,
				),
				array (
					'Constant' => 'BEANS_FRONTEND_FRAMEWORK',
					'Value' => BEANS_FRONTEND_FRAMEWORK,
				),

			);
			WP_CLI\Utils\format_items( 'table', $items, $fields );

		}


	}

	WP_CLI::add_command( 'beans', 'Beans_WPCLI' );

}
