/**
 * Adds a “hide breadcrumbs” checkbox to Beans Block Editor sidebar in a
 * Breadcrumbs panel. Unchecked by default.
 *
 * If checked and the post is updated or published, `_beans_hide_breadcrumbs`
 * is set to true in post meta.
 *
 * To disable the checkbox, use the PHP `beans_breadcrumbs_toggle_enabled`
 * TODO - Need to breakup update webpack.
 * TODO - Make this label dynamic.
 *
 * filter: `add_filter( 'beans_breadcrumbs_toggle_enabled', '__return_false' );`.
 *
 * @since   2.0.0
 * @package Beans\JS
 * @author  StudioPress & Maurice Tadros
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
import { BeansBreadcrumbsToggleInfo } from './breadcrumbs-toggle-info.js';
import { newMeta } from '../../lib/new-meta.js';

/**
 * Checkbox component for the hide breadcrumbs option.
 *
 * @param {Object} props Component properties.
 * @return {Object} hideBreadcrumbsComponent
 */
function beansHideBreadcrumbsComponent( { hideBreadcrumbs = false, onUpdate } ) {
	return (
		<Fragment>
			<Fill name="BeansSidebar">
				<PanelBody initialOpen={ true } title={ __( 'Breadcrumbs', 'tm-beans' ) }>
					<PanelRow>
						<div>Breadcrumbs will not be shown if either setting below is active.</div>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ hideBreadcrumbs ? __( 'Breadcrumbs are hidden', 'tm-beans' ) : __( 'Breadcrumbs are shown', 'tm-beans' ) }
							checked={ !! hideBreadcrumbs }
							onChange={ () => onUpdate( ! hideBreadcrumbs ) }
						/>
					</PanelRow>
					<PanelRow>
						<BeansBreadcrumbsToggleInfo />
					</PanelRow>
				</PanelBody>
			</Fill>
		</Fragment>
	);
}

// Retrieves meta from the Block Editor Redux store (withSelect) to set initial checkbox state.
// Persists it to the Redux store on change (withDispatch).
// Changes are only stored in the WordPress database when the post is updated.
const render = compose( [
	withSelect( () => {
		return {
			hideBreadcrumbs: select( 'core/editor' ).getEditedPostAttribute( 'meta' )._beans_hide_breadcrumbs,
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		onUpdate( hideBreadcrumbs ) {
			dispatch( 'core/editor' ).editPost(
				{ meta: newMeta( '_beans_hide_breadcrumbs', !! hideBreadcrumbs ) }
			);
		},
	} ) ),
] )( beansHideBreadcrumbsComponent );

registerPlugin( 'beans-breadcrumbs-toggle', { render } );
