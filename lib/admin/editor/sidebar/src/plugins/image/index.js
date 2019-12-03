/**
 * Adds a “hide featured image” checkbox to Beans Block Editor sidebar in an
 * Image panel. Unchecked by default.
 *
 * If checked and the post is updated or published,
 * `_beans_hide_singular_image` is set to true in post meta.
 *
 * @since  2.0.0
 * @package Beans\JS
 * @author  StudioPress
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
// import { BeansImageToggleInfo } from '../components/image-toggle-info.js';
import { newMeta } from '../../lib/new-meta.js';

/**
 * Checkbox component for the hide title option.
 *
 * @param {Object} props Component properties.
 * @return {Object} BeansHideFeaturedImageComponent.
 */
function BeansHideFeaturedImageComponent( { hideFeaturedImage = false, onUpdate } ) {
	return (
		<Fragment>
			<Fill name="BeansSidebar">
				<PanelBody initialOpen={ true } title={ __( 'Images', 'beans' ) }>
					<PanelRow>
						<ToggleControl
							label={ hideFeaturedImage ? __( 'Featured Image is hidden', 'tm-beans' ) : __( 'Featured Image are shown', 'tm-beans' ) }
							checked={ !! hideFeaturedImage }
							onChange={ () => onUpdate( ! hideFeaturedImage ) }
						/>
					</PanelRow>
					{/*<PanelRow>*/}
					{/*	<BeansImageToggleInfo />*/}
					{/*</PanelRow>*/}
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
			hideFeaturedImage: select( 'core/editor' ).getEditedPostAttribute( 'meta' )._beans_hide_singular_image,
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		onUpdate( hideFeaturedImage ) {
			dispatch( 'core/editor' ).editPost(
				{ meta: newMeta( '_beans_hide_singular_image', !! hideFeaturedImage ) }
			);
		},
	} ) ),
] )( BeansHideFeaturedImageComponent );

registerPlugin( 'beans-image-toggle', { render } );
