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
		 * Show current Beans Development Mode status
		 *
		 * ## EXAMPLES
		 *
		 *  $ wp beans dev_mode
		 *  $ wp beans dev_mode --activate
		 *  $ wp beans dev_mode --deactivate
		 *  2.9.1
		 *
		 * @subcommand dev_mode
		 *
		 * @since 2.10.0
		 *
		 * @param array $args       Positional arguments.
		 * @param array $assoc_args Stores all the arguments defined like --key=value or --flag or --no-flag.
		 */
		public function debug( $args, $assoc_args ) {

			if( $assoc_args && key_exists('activate', $assoc_args)){
				update_option('beans_dev_mode', true);
			} else if ( $assoc_args && key_exists('deactivate', $assoc_args)){
				update_option('beans_dev_mode', false);
			}
			$status = (get_option('beans_dev_mode') ? 'On' : 'Off');
			WP_CLI::success( 'Beans Development mode is: '. $status );
			WP_CLI::log( 'To turn off Beans Development Mode - Run' );
			WP_CLI::log( 'wp beans dev_mode --deactivate' );
			WP_CLI::log( 'To turn on Beans Development Mode - Run' );
			WP_CLI::log( 'wp beans dev_mode --activate' );
		}

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
