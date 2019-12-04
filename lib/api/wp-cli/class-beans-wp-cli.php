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
			 * Show current Beans values of the breadcrumbs
			 *
			 * ## EXAMPLES
			 *
			 *  $ wp beans breadcrumbs
			 *  $ wp beans breadcrumbs key=single value=0
			 *
			 * @subcommand breadcrumbs
			 *
			 * @param array $args Positional arguments.
			 * @param array $assoc_args Stores all the arguments defined like --key=value or --flag or --no-flag.
			 * @since 2.0.0
			 *
			 */
			public function breadcrumbs($args, $assoc_args)
			{
				$bean_breadcrumbs_option = get_option('bean_breadcrumbs');

				WP_CLI::log('To Hide breadcrumbs on posts type:');
				WP_CLI::log('wp beans breadcrumbs key=single value=0');

				if( sizeof($args) ==2 ){
					// Extract the option key, and value from the args.
					$option_key = '';
					$option_value = '';
					foreach($args as $arg){
						list($key, $value) = explode('=', $arg);
						if($key == 'key'){
							$option_key = $value;  // Single ...
						} else if ($key == 'value'){
							$option_value = $value;
						}
					}
					$all_options = beans_breadcrumb_options();
					if( in_array($option_key, $all_options )){
						$bean_breadcrumbs_option[$option_key] = $option_value;
						update_option( 'bean_breadcrumbs', $bean_breadcrumbs_option );
						WP_CLI::success('Breadcrumb '.$option_key.' is updated to '.$option_value);
					}
				}

				$items = array();
				$fields = array('Name', 'Value');
				$index = 0;
				foreach( $bean_breadcrumbs_option as $key => $value){

					$items[$index]['Name'] = $key;
					$items[$index]['Value'] = ($value ? 'Shown' : 'Hidden');
					$index++;
				}

				WP_CLI\Utils\format_items('table', $items, $fields);
			}


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
			 * Show current Beans visible values of the featured images
			 *
			 * ## EXAMPLES
			 *
			 *  $ wp beans featured_images
			 *
			 * @subcommand featured_images
			 *
			 * @param array $args Positional arguments.
			 * @param array $assoc_args Stores all the arguments defined like --key=value or --flag or --no-flag.
			 * @since 2.0.0
			 *
			 */
			public function featured_images($args, $assoc_args)
			{
				$options = get_option('bean_featured_images');
				WP_CLI::log('Showing options for: bean_featured_images ');


				$items = array();
				$fields = array('Name', 'Value');
				$index = 0;
				foreach( $options as $key => $value){

					$items[$index]['Name'] = $key;
					$items[$index]['Value'] = ($value ? 'Shown' : 'Hidden');
					$index++;
				}

				WP_CLI\Utils\format_items('table', $items, $fields);
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
					Beans\Admin\Onboarding\_beans_onboard(true);
					WP_CLI::success( 'Overwrite onboarding Content' );
				} else if ($assoc_args && key_exists('duplicate', $assoc_args)){
					Beans\Admin\Onboarding\_beans_onboard();
					WP_CLI::success( 'Duplicated onboarding Content' );
				} else {
					WP_CLI::log( 'Need to specify duplicate or overwrite' );
					WP_CLI::log( 'wp beans onboard --overwrite' );
					WP_CLI::log( 'wp beans onboard --duplicate' );
				}

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
