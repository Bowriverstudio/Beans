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
namespace Beans\Admin\Onboarding;

final class _Beans_Admin_Onboarding_Plugin
{


	/**
	 * Beans options page content.
	 *
	 * @return void
	 * @since 1.0.0
	 *
	 */
	public function display()
	{

		$onboarding = new _Beans_Admin_Onboarding();

		?>
		<div>
			<h3>Theme's Required Plugins</h3>
			<p>Will be automatically installed. Once the required plugins are in the wordpress repository this
				functionality will be updated.</p>
			<table>
				<tr>
					<th></th>
					<th>Plugin</th>
					<th>Description</th>
					<th>Install</th>
				</tr>

				<?php
				foreach ($onboarding->onboarding_plugins() as $plugin):
					?>
					<tr>
						<td>
							<?php if ($plugin['icon']){ ?>
							<img width="40px" height="40px" src="<?php echo $plugin['icon'] ?>"></img></td>
						<?php } else { ?>
							<img width="40px" height="40px"
								 src="<?php echo BEANS_ADMIN_ASSETS_URL . 'images/wordpress-icon.jpg' ?>"></img></td>
						<?php } ?>
						<td><?php echo $plugin['name'] ?></td>
						<td><?php echo $plugin['description'] ?></td>
						<td><?php if (is_plugin_active($plugin['slug'])): ?>
								Installed
							<?php else : ?>
								<?php echo 'Not installed: ' . $plugin['install'] ?>
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


}

