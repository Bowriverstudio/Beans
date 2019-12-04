/**
 * Adds a “hide featured image” checkbox to Beans Block Editor sidebar in an
 * Image panel. Unchecked by default.
 *
 * If checked and the post is updated or published,
 * `_beans_hide_singular_image` is set to true in post meta.
 *
 * @since  2.0.0
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { select, withSelect, withDispatch } from '@wordpress/data';
import { ToggleControl, Fill, PanelBody, PanelRow } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import { BeansRemoveActionToggle } from './remove-action-toggle.js';
import { newMeta } from '../../lib/new-meta.js';
import {MyComponent} from "./toggle";

/**
 * Checkbox component for the hide title option.
 *
 * @param {Object} props Component properties.
 * @return {Object} BeansRemoveActionComponent.
 */
function BeansRemoveActionComponent( ) {
	return (
		<Fragment>
			<Fill name="BeansSidebar">
				<PanelBody initialOpen={ true } title={ __( 'Remove Action', 'beans' ) }>
					<div>If Option is enabled that action will be removed</div>
					<BeansRemoveActionToggle />
				</PanelBody>
			</Fill>
		</Fragment>
	);
}

// Retrieves meta from the Block Editor Redux store (withSelect) to set initial checkbox state.
// Persists it to the Redux store on change (withDispatch).
// Changes are only stored in the WordPress database when the post is updated.
const render = compose( )( BeansRemoveActionComponent );

registerPlugin( 'beans-remove-action-toggle', { render } );
