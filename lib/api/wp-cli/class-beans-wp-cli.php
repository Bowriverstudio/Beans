<?php
/**
 * Add developer support for Beans via WP CLI
 *
 * Beans\Framework\API\WPCLI
 *
 * @since 2.0.0
 */
namespace {

	use function Beans\Admin\Onboarding\_beans_onboard;


	if (defined('WP_CLI') && WP_CLI) {

		/**
		 * Manage Beans Framework via cli.
		 */
		class Beans_WP_CLI
		{

			/**
			 * Show current Beans Development Mode status
			 *
			 * ## EXAMPLES
			 *
			 *  $ wp beans dev_mode
			 *  $ wp beans dev_mode --activate
			 *  $ wp beans dev_mode --deactivate
			 *
			 * @subcommand dev_mode
			 *
			 * @param array $args Positional arguments.
			 * @param array $assoc_args Stores all the arguments defined like --key=value or --flag or --no-flag.
			 * @since 2.0.0
			 *
			 */
			public function dev_mode($args, $assoc_args)
			{
				if ($assoc_args && key_exists('activate', $assoc_args)) {
					WP_CLI::log('Activating Beans Dev Mode');
					update_option('beans_dev_mode', true);
				} else if ($assoc_args && key_exists('deactivate', $assoc_args)) {
					WP_CLI::log('Deactivating Beans Dev Mode');
					update_option('beans_dev_mode', false);
				} else {
					WP_CLI::log('To turn off Beans Development Mode - Run');
					WP_CLI::log('wp beans dev_mode --deactivate');
					WP_CLI::log('To turn on Beans Development Mode - Run');
					WP_CLI::log('wp beans dev_mode --activate');
				}

				$status = (get_option('beans_dev_mode') ? 'On' : 'Off');
				WP_CLI::success('Beans Development mode is: ' . $status);
			}

			/**
			 * Imports content from onboarding.
			 *
			 * Overwrite - allows forces posts and pages to be overwritten if exists.
			 *
			 * ## EXAMPLES
			 *
			 *  $ wp beans onboard
			 *  $ wp beans onboard --overwrite
			 * @subcommand onboard
			 *
			 * @param array $args Positional arguments.
			 * @param array $assoc_args Stores all the arguments defined like --key=value or --flag or --no-flag.
			 * @since 2.0.0
			 *
			 */
			public function onboard($args, $assoc_args)
			{
				require_once BEANS_ADMIN_PATH . 'onboarding/functions.php';

				$overwrite = false;
				if ($assoc_args && key_exists('overwrite', $assoc_args)) {
					$overwrite = true;
				}
//				$onboard = new Beans\Admin\Onboarding\_Beans_Onboarding_Content();
//				$onboard->import_content($overwrite);

				Beans\Admin\Onboarding\_beans_onboard($overwrite);
				WP_CLI::success( 'Onboarded Content' );
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
				$fields = array('Constant', 'Value');
				$items = array(
					array(
						'Constant' => 'BEANS_VERSION',
						'Value' => BEANS_VERSION,
					),
					array(
						'Constant' => 'BEANS_THEME_PATH',
						'Value' => BEANS_THEME_PATH,
					),
					array(
						'Constant' => 'BEANS_THEME_URL',
						'Value' => BEANS_THEME_URL,
					),
					array(
						'Constant' => 'CHILD_PATH',
						'Value' => CHILD_PATH,
					),
					array(
						'Constant' => 'CHILD_URL',
						'Value' => CHILD_URL,
					),
					array(
						'Constant' => 'BEANS_FRONTEND_FRAMEWORK',
						'Value' => BEANS_FRONTEND_FRAMEWORK,
					),
					array(
						'Constant' => 'ONBOARDING_CONTENT_PATH',
						'Value' => ONBOARDING_CONTENT_PATH,
					),					array(
						'Constant' => 'ONBOARDING_IMAGE_URL',
						'Value' => ONBOARDING_IMAGE_URL,
					),



				);
				WP_CLI\Utils\format_items('table', $items, $fields);

			}


		}

		WP_CLI::add_command('beans', 'Beans_WP_CLI');

	}
}
