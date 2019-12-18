<?php
/**
 * This class handles the onboarding related to the plugins.
 *
 * @package Beans\Framework\Admin\Onboarding
 *
 * @since 2.0.0
 */

/**
 * Beans admin page.
 *
 * @since   2.0.0
 * @ignore
 * @access  private
 *
 * @package Beans\Framework\Admin\Onboarding
 */
namespace Beans\Admin\Onboarding;

final class _Beans_Admin_Onboarding_Plugin
{

	public function onboarding_plugins() {

		$config = _beans_onboarding_config();
		return isset($config['dependencies']['plugins']) ? (array)$config['dependencies']['plugins'] : [];
	}


	/**
	 * Beans options page content.
	 *
	 * @return void
	 * @since 1.0.0
	 *
	 */
	public function display()
	{


		?>
		<div>
			<h3>Theme's Required Plugins</h3>
			<p>Please install these manually.  Plugins in roadmap will be automatically installed. This requires some plugins to be installed in the offical wordpres repo.</p>
			<table>
				<tr>
					<th></th>
					<th>Plugin</th>
					<th>Description</th>
					<th>Required</th>
					<th>Install</th>
					<th></th>
				</tr>

				<?php
				$plugins = self::onboarding_plugins();
				foreach ($plugins as $plugin):
					?>
					<tr>
						<td>
							<?php if (array_key_exists('icon', $plugin)){ ?>
							<img width="40px" height="40px" src="<?php echo $plugin['icon'] ?>"></img></td>
						<?php } else { ?>
							<img width="40px" height="40px"
								 src="<?php echo BEANS_ADMIN_ASSETS_URL . 'images/wordpress-icon.jpg' ?>"></img></td>
						<?php } ?>
						<td><?php echo $plugin['name'] ?></td>
						<td><?php echo $plugin['description'] ?></td>
						<td><?php echo ($plugin['required'] ? 'Yes' : 'No'); ?></td>
						<td><?php if (is_plugin_active($plugin['slug'])): ?>
								<span class="dashicons dashicons-yes-alt"></span>
							<?php else : ?>
								<span class="dashicons dashicons-no-alt"></span>
							<?php endif; ?>
						</td>
						<td><?php if (!is_plugin_active($plugin['slug'])): ?>
								<?php echo $plugin['install'] ?>
							<?php endif; ?>
						</td>
					</tr>
				<?php
				endforeach;
				?>
			</table>
		</div>
		<?php
	}


	public function can_onboard(){
		$can_onboard = true;
		$plugins = self::onboarding_plugins();
		foreach ($plugins as $plugin){
			if( ! is_plugin_active($plugin['slug']) && $plugin['required']){
				$can_onboard = false;
				continue;
			}
		}
		return $can_onboard;
	}


}

