<?php
/**
 * This class build the Beans admin page.
 *
 * @package Beans\Framework\API
 *
 * @since 1.0.0
 */
namespace Beans\Admin\Onboarding;

/**
 * Beans admin page.
 *
 * @since   1.0.0
 * @ignore
 * @access  private
 *
 * @package Beans\Framework\API
 */
final class _Beans_Admin_Menu_Onboarding {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ), 150 );

// Change 'wp_ajax_your_hook' to 'wp_ajax_jsforwp_add_like'
// Or change to 'wp_ajax_nopriv_your_hook' to 'wp_ajax_nopriv_jsforwp_add_like'
// Change 'your_hook' to 'jsforwp_add_like'
		add_action( 'wp_ajax_beans_onboard_childtheme',  array( $this,'beans_onboard_childtheme') );
		add_action( 'wp_ajax_nopriv_beans_onboard_childtheme',  array( $this,'beans_onboard_childtheme') );
	}

	/**
	 * Add Beans' menu.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function admin_menu() {
		add_submenu_page( 'beans', __( 'Onboarding', 'tm-beans' ), __( 'Onboarding', 'tm-beans' ), 'manage_options', 'beans_onboarding', array( $this, 'display_screen' ));
	}



	/**
	 * Beans options page content.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function display_screen() {


		$onboarding = new _Beans_Admin_Onboarding();
		if($_POST['submit']) {
//			$onboarding->install();
			add_action('admin_notices', array( $this,'shapeSpace_custom_admin_notice'));
			$content = new _Beans_Admin_Onboarding_Content();
			$content->import_content();
		}
		?>

		<div class="beans_admin_notice hidden ">
			<p class="beans_admin_notice_content"></p>
		</div>

		<div class="wrap">
			<h1><?php esc_html_e( 'Beans Onboarding', 'tm-beans' ); ?></h1>
			<p>This functionality is still being developed. </p>
			<h2>Title: <?php echo esc_html( $onboarding->display_title() ) ?></h2>
			<!-- TODO Disnel - fix the display image - add a default image (anything you like) this is missing -->
			<div class="beans-screenshot"> <img src="<?php echo $onboarding->display_image() ?>"/></div>

			<?php
			$plugins = new _Beans_Admin_Onboarding_Plugin();
			$plugins->display();

			$content = new _Beans_Admin_Onboarding_Content();
			$content->display();

			?>

			<div>
				<h3>Widget List</h3>
				<?php
				foreach ($onboarding->onboarding_widgets() as $key => $widget){
					printf( '<div>%s %s</div>', __('Widget Slug:', 'tm-beans'), $key);
				}
				?>
			</div>

<br><br>

<!--			<form  action="" method="POST">-->
<!--				<input class="button-primary" type="submit" name="submit" value="Install" />-->
<!--			</form>-->

			<input class="button-primary beans_onboard_childtheme"  value="Install" />

		</div>
		<?php
	}


	// display custom admin notice
	function shapeSpace_custom_admin_notice() { ?>

		<div class="notice notice-success is-dismissible">
			<p><?php _e('Congratulations, you did it!', 'shapeSpace'); ?></p>
		</div>

	<?php }



	function beans_onboard_childtheme( ) {
		// Change the parameter of check_ajax_referer() to 'jsforwp_likes_nonce'
//		check_ajax_referer( 'jsforwp_likes_nonce' );
		add_action('admin_notices', array( $this,'shapeSpace_custom_admin_notice'));

		$response['type'] = 'success';

		$content = new _Beans_Admin_Onboarding_Content();
		$content->import_content();
		$response['content'] = 'Message';

		$response = json_encode( $response);
		echo $response;
		die();
	}





}

new _Beans_Admin_Menu_Onboarding();
