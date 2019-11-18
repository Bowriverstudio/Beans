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
		 * Show all defined Beans Constants
		 *
		 * ## Constants
		 *
		 * ## EXAMPLES
		 *
		 *  $ wp beans contants
		 *
		 * @subcommand constants
		 *
		 * @param array $args Positional arguments.
		 * @param array $assoc_args Stores all the arguments defined like --key=value or --flag or --no-flag.
		 * @since 2.0.0
		 *
		 */
		public function constants()
		{

			WP_CLI::log("TEST");

		}
	}

	WP_CLI::add_command( 'beans', 'Beans_WPCLI' );

}
