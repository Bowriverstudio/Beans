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
		 * @param array $args Positional arguments.
		 * @param array $assoc_args Stores all the arguments defined like --key=value or --flag or --no-flag.
		 * @since 2.0.0
		 *
		 */
		public function constants()
		{
			WP_CLI::log("BEANS_VERSION: " .BEANS_VERSION);
			WP_CLI::log("BEANS_THEME_PATH: " .BEANS_THEME_PATH);
			WP_CLI::log("BEANS_THEME_URL: " .BEANS_THEME_URL);
			WP_CLI::log("CHILD_PATH: " .CHILD_PATH);
			WP_CLI::log("CHILD_URL: " .CHILD_URL);
			WP_CLI::log("BEANS_FRONTEND_FRAMEWORK: " .BEANS_FRONTEND_FRAMEWORK);
		}


	}

	WP_CLI::add_command( 'beans', 'Beans_WPCLI' );

}
