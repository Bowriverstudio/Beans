/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import {PanelRow, Spinner} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import SwitcherButton from "./SwitcherButton";

 export  class SwitcherControler extends Component {
	constructor( props ) {
		super( props );

		this.updateDefaultLayout = this.updateDefaultLayout.bind(this)

		this.state = {layoutOptions: '', layoutSelected: ''};
	}


	/**
	 * Gets items with breadcrumbs enabled, user capabilities, and reading settings.
	 */
	componentDidMount() {
		apiFetch( { path: '/beans/v1/layout-options' } ).then( ( types ) => {
			this.setState( { layoutOptions: types } );
		} );

		apiFetch( { path: '/beans/v1/layout-default-selected' } ).then( ( types ) => {
			this.setState( { layoutSelected: types } );
		} );

	}

	updateDefaultLayout(key){

		const data = {
			[ this.props.currentPostType ]: key,
		};

		const putRequest = {
			path: '/beans/v1/layout-default',
			method: 'PUT',
			data,
		};
		apiFetch( putRequest ).then( ( types ) => {
			if( this.props.onLayoutChange){
				this.props.onLayoutChange()
			}
		})

	}

	render() {

		if( !this.state || ! this.state.layoutOptions ){
			let label = sprintf( __( 'Disabling breadcrumbs on %s...', 'beans' ), 'test' );

			return (
				<p>
					<span>{ label }</span>
					<Spinner />
				</p>
			);
		}

		let items = Object.keys(this.state.layoutOptions).map(key =>
			<SwitcherButton
				key={key}
				isSelected={(this.props.currentLayout == key) ? 1 : 0}
				label={key}
				value={key}
				updateFunction={this.updateDefaultLayout}
			/>
		);

		return (
			<PanelRow className="layout-switcher">
				{items}
			</PanelRow>
		);

	}
}
