/**
 * Adds a “layout toggle” to the Block Editor sidebar under the
 * Document sidebar. No layout selected by default.
 *
 * @since   3.1.0
 * @package Genesis\JS
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { select, withSelect, withDispatch } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { SelectControl, Fill, Panel, PanelBody, Spinner } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { newMeta } from '../../lib/new-meta.js';

class genesisLayoutToggleComponent extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			containerOptions: [],
		};
	}

	componentDidMount() {
		apiFetch( { path: '/beans/v1/containers' } ).then( ( collection ) => {
			const stack = [ ];

			for ( const slug of Object.keys( collection ) ) {
				stack.push( {
					label: collection[ slug ].label,
					value: slug,
				} );
			}

			this.setState( { containerOptions: stack } );
		} );
	}

	render() {
		return (
			<Fragment>
				<Fill name="BeansSidebar">
					<Panel>
						<PanelBody initialOpen={ true } title={ __( 'Container Width', 'tm-beans' ) }>
							{
								// console.log(this.state.containerOptions);
								this.state.containerOptions.length ?
									<SelectControl
										label={ __( 'Select Layout', 'tm-beans' ) }
										value={ this.props.container }
										options={ this.state.containerOptions }
										onChange={ ( container ) => this.props.onChange( container ) }
									/> :
									<Spinner />
							}
						</PanelBody>
					</Panel>
				</Fill>
			</Fragment>
		);
	}
}

// Retrieves meta from the Block Editor Redux store (withSelect) to set initial checkbox state.
// Persists it to the Redux store on change (withDispatch).
// Changes are only stored in the WordPress database when the post is updated.
const render = compose( [
	withSelect( () => {
		return {
			container: select( 'core/editor' ).getEditedPostAttribute( 'meta' )._beans_body_container,
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		onChange( container ) {
			dispatch( 'core/editor' ).editPost(
				{ meta: newMeta( '_beans_body_container', container ) }
			);
		},
	} ) ),
] )( genesisLayoutToggleComponent );

registerPlugin( 'beans-body-container', { render } );
