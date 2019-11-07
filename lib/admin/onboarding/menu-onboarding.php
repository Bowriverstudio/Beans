<?php
/**
 * This class build the Beans admin page.
 *
 * @package Beans\Framework\API
 *
 * @since 1.0.0
 */

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
			$onboarding->install();
		}
		?>
		<div class="wrap">
			<h1><?php esc_html_e( 'Beans Onboarding', 'tm-beans' ); ?></h1>
			<p>This does things .... </p>
			<h2>Title: <?php echo esc_html( $onboarding->display_title() ) ?></h2>
			<div class="beans-screenshot"> <?php echo esc_html( $onboarding->display_image() ) ?></div>
			<div>
				<h3>Plugin List</h3>
				<?php
				foreach ($onboarding->onboarding_plugins() as $plugin){
					printf( '<div>%s %s</div>', __('Plugin Name:', 'tm-beans'), $plugin['name']);
				}
				?>
			</div>
			<div>
				<h3>Widget List</h3>
				<?php
				foreach ($onboarding->onboarding_widgets() as $key => $widget){
					printf( '<div>%s %s</div>', __('Widget Slug:', 'tm-beans'), $key);
				}
				?>

			</div>



			<form  action="" method="POST">
				<input class="button-primary" type="submit" name="submit" value="Install" />
			</form>
		</div>
		<?php
	}


}

new _Beans_Admin_Menu_Onboarding();
