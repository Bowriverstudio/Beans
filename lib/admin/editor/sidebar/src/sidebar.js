/**
 * Adds the Beans Sidebar to the Block Editor.
 *
 * Exposes a 'BeansSidebar' slot. Other components can use portal rendering
 * to appear inside the Beans sidebar by wrapping themselves in a Fill
 * component. First, import the Fill component:
 *
 * `import { Fill } from '@wordpress/components';`
 *
 * Then wrap your own component in a Fill component:
 *
 * `<Fill name="BeansSidebar">I'm in the Beans sidebar</Fill>`
 *
 * @since   2.0.0
 */

/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { Slot } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { BeansIcon, BeansIconSmall } from './beans-icons';

// Beans Sidebar Component
const render = () => {
	return (
		<Fragment>
			<PluginSidebarMoreMenuItem
				target="beans-sidebar"
				icon={ <BeansIconSmall /> }
			>
				Beans
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="beans-sidebar"
				title="Beans"
				icon={ <BeansIcon /> }
			>
				<Slot name="BeansSidebar" />
			</PluginSidebar>
		</Fragment>
	);
};

registerPlugin( 'beans-sidebar', { render, icon: <BeansIconSmall /> } );
