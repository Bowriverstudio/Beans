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

		// this.onChange = this.onChange.bind(this)

		this.state = {};
	}

	 /**
	  * Gets items with breadcrumbs enabled, user capabilities, and reading settings.
	  */
	 componentDidMount() {
		 apiFetch( { path: '/beans/v1/layout-options' } ).then( ( types ) => {
			 this.setState( { layoutOptions: types } );
		 } );
	 }


	updateDefaultLayout(key){

		console.log(key)
		console.log(this.props.onLayoutUpdateDispatch)
		// const data = {
		// 	[ this.props.currentPostType ]: key,
		// };
		//
		// const putRequest = {
		// 	path: '/beans/v1/layout-default',
		// 	method: 'PUT',
		// 	data,
		// };
		// apiFetch( putRequest ).then( ( types ) => {
		// 	console.log(this.props.onLayoutChange)
		// 	if( this.props.onLayoutChange){
		// 		this.props.onLayoutChange()
		// 	}
		// })

	}



	render() {

		if( ! this.state.layoutOptions ){
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
				isSelected={(this.props.currentLayout == key) ? 1 : 0}
				label={key}
				value={key}
				updateFunction={this.props.onChange}
			/>
		);

		return (
			<PanelRow className="layout-switcher">
				{items}
			</PanelRow>
		);

	}
}
