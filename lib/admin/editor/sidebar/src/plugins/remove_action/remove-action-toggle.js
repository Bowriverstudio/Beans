/**
 * Provides a BeansBreadcrumbsToggleInfo component that displays the state
 * of the global “breadcrumbs” Customzier checkbox for the current page type.
 *
 * Offers a link to either disable or enable breadcrumbs site-wide for
 * the current page type. The goal is to reduce the need to leave the editor
 * and visit the Customizer to turn breadcrumbs on or off.
 *
 * @since   3.1.0
 * @package Beans\JS
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {select, withDispatch, withSelect} from '@wordpress/data';
import {PanelBody, PanelRow, Spinner, ToggleControl} from '@wordpress/components';
import { speak } from '@wordpress/a11y';
import apiFetch from '@wordpress/api-fetch';
import {newMeta} from "../../lib/new-meta";

class RemoveActionToggle extends Component {
	constructor( props ) {
		super( props );

		// Enable access to this.props inside `updateBreadcrumbsSetting`.
		this.getRemoveActionValue = this.getRemoveActionValue.bind(this)
		console.log('props')
		console.log(this.props)
		// this.onUpdate = this.onUpdate.bind(this)

		this.state = {
			// typesWithBreadcrumbsEnabled: [],
			// isStaticHomepage: false,
			// isPostsPage: false,
			// currentUserCanEditThemeOptions: false,
			// updating: false,
		};
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


			let items = Object.keys(this.state.removeActionsOptions).map(key =>

				<PanelRow>

				<ToggleControl
					label={ 1 ? __( this.state.removeActionsOptions[key], 'tm-beans' ) : __( this.state.removeActionsOptions[key], 'tm-beans' ) }
					checked={ this.getRemoveActionValue(key) }
					onChange={ () => this.props.onUpdate(  this.props.beansRemoveActions, key, ! this.getRemoveActionValue(key) ) }
				/>
				</PanelRow>
			);

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

console.log(applyWithDispatch)

// Get current post type, label, and post ID from the Block Editor Redux store.
export const BeansRemoveActionToggle = compose( [
	withSelect( () => {
		return {
			beansRemoveActions: select( 'core/editor' ).getEditedPostAttribute( 'meta' )._beans_remove_actions,
		};
	} ),
	applyWithDispatch,
] )( RemoveActionToggle );
