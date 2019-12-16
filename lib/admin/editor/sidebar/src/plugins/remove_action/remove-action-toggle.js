/**
 * Provides a Remove Action interface for some of the actions that can be removed.
 *
 * @since   2.0.0
 * @package Beans\JS
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {select, withDispatch, withSelect} from '@wordpress/data';
import {PanelRow, Spinner, ToggleControl} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import {newMeta} from "../../lib/new-meta";

class RemoveActionToggle extends Component {
	constructor( props ) {
		super( props );

		this.getRemoveActionValue = this.getRemoveActionValue.bind(this)


		this.state = {};
	}


	/**
	 * Gets items with breadcrumbs enabled, user capabilities, and reading settings.
	 */
	componentDidMount() {
		apiFetch( { path: '/beans/v1/remove-actions-options' } ).then( ( types ) => {
			this.setState( { removeActionsOptions: types } );
		} );
	}

	getRemoveActionValue(key){

		if( ! this.props.beansRemoveActions || 0 === this.props.beansRemoveActions.length){
			return 0;
		}

		let obj = JSON.parse(this.props.beansRemoveActions);
		if( ! obj[key]) {
			return 0;
		}

		return obj[key];
	}

	render() {

		if( ! this.state.removeActionsOptions ){
			let label = sprintf( __( 'Disabling breadcrumbs on %s...', 'beans' ), 'test' );

			return (
				<p>
					<span>{ label }</span>
					<Spinner />
				</p>
			);
		}

			let items = Object.entries(this.state.removeActionsOptions).map(([key, value]) =>
				<PanelRow key={key}>
					<ToggleControl
						label={1 ? __(value['label'], 'tm-beans') : __(value['label'], 'tm-beans')}
						checked={this.getRemoveActionValue(value['key'])}
						onChange={() => this.props.onUpdate(this.props.beansRemoveActions, value['key'], !this.getRemoveActionValue(value['key']))}
					/>
				</PanelRow>			)

		return (
			<Fragment>
				{items}
			</Fragment>
		);

	}
}

const applyWithDispatch = withDispatch(dispatch => {
	const { createNotice } = dispatch('core/notices');
	return { createNotice: createNotice,
		onUpdate( beansRemoveActions, key, value ) {

			let obj;
			if( ! beansRemoveActions || beansRemoveActions.lenght === 0 ){
				// Empty object
				obj = {}
				obj[key] = value
			} else {
				obj = JSON.parse(beansRemoveActions);
				obj[key] = value
			}

			const myJSON = JSON.stringify(obj);

			dispatch( 'core/editor' ).editPost(
				{ meta: newMeta( '_beans_remove_actions', myJSON ) }
			);
		},
	};
});

// Get current post type, label, and post ID from the Block Editor Redux store.
export const BeansRemoveActionToggle = compose( [
	withSelect( () => {
		return {
			beansRemoveActions: select( 'core/editor' ).getEditedPostAttribute( 'meta' )._beans_remove_actions,
		};
	} ),
	applyWithDispatch,
] )( RemoveActionToggle );
