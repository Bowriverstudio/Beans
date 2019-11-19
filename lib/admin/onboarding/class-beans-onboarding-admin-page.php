<?php
/**
 * This class build the Beans Onbaording admin page.
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
final class _Beans_Onboarding_Admin_Page
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		if(_beans_onboarding_config() ){
			add_action('admin_menu', array($this, 'admin_menu'), 150);
			add_action('wp_ajax_beans_onboard_childtheme', array($this, 'beans_onboard_childtheme'));
			add_action('wp_ajax_nopriv_beans_onboard_childtheme', array($this, 'beans_onboard_childtheme'));
		}
	}

	/**
	 * Add Beans' menu.
	 *
	 * @return void
	 * @since 1.0.0
	 *
	 */
	public function admin_menu()
	{
		add_submenu_page('beans', __('Onboarding', 'tm-beans'), __('Onboarding', 'tm-beans'), 'manage_options', 'beans_onboarding', array($this, 'display_screen'));
	}


	/**
	 * Beans options page content.
	 *
	 * @return void
	 * @since 1.0.0
	 *
	 */
	public function display_screen()
	{ ?>
		<div class="beans_admin_notice hidden ">
			<p class="beans_admin_notice_content"></p>
		</div>

		<div class="wrap">
			<h1><?php esc_html_e('Beans Onboarding', 'tm-beans'); ?></h1>
			<p>This functionality is still being developed. </p>
			<h2>Title: <?php echo esc_html(self::display_title()) ?></h2>
			<!-- TODO Disnel - fix the display image - add a default image (anything you like) this is missing -->
			<div class="beans-screenshot"><img src="<?php echo self::display_image() ?>"/></div>

			<?php
			$plugins = new _Beans_Admin_Onboarding_Plugin();
			$plugins->display();

			$content = new _Beans_Onboarding_Content();
			$content->display();

			$widgets = new _Beans_Admin_Onboarding_Widgets();
			$widgets->display();

			$navigation = new _Beans_Admin_Onboarding_Navigation();
			$navigation->display();

			$class = new _Beans_Admin_Onboarding_Theme_Mod();
			$class->display();
			?>
			<br>
			<br>

			<?php if( $plugins->can_onboard()):?>
				<input type="submit" class="button-primary beans_onboard_childtheme"  value="Install" />
			<?php else: ?>
				<p>Must install required plugins first</p>
				<input type="submit" class="button-primary beans_onboard_childtheme"  disabled="true" value="Install" />
			<?php endif;?>

		</div>
		<?php
	}

	private function display_title()
	{
		$config = _beans_onboarding_config();
		return isset($config['title']) ? (string)$config['title'] : '';
	}

	private function display_image()
	{
		// @TODO update this from url and if doesn't exist use default.
		$config = _beans_onboarding_config();
		return isset($config['thumbnail']) ? (string)$config['thumbnail'] : 'TODO DEfault image';
	}


	function beans_onboard_childtheme()
	{
		check_ajax_referer('beans_nonce');

		$response['type'] = 'success';

		_beans_onboard();

		$response['content'] = 'Imported content / widgets and menus.';

		$response = json_encode($response);
		echo $response;
		die();
	}

}

new _Beans_Onboarding_Admin_Page();
