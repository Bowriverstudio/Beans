/**
 * Selects
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
import {__} from '@wordpress/i18n';
import {Component, Fragment} from '@wordpress/element';
import {withSelect} from '@wordpress/data';
import {Fill, PanelBody} from '@wordpress/components';
import {registerPlugin} from '@wordpress/plugins';

import  {getSmallIconFromLayout} from '../../lib/layout'

/**
 * Internal dependencies
 */

import {SwitcherControler} from "./SwitcherControls.js";

class BeansDefaultLayout extends Component {
	constructor() {
		super(...arguments);

		this.getCurrentLayout = this.getCurrentLayout.bind(this)
		this.fetchCurrentLayout = this.fetchCurrentLayout.bind(this)

		this.fetchCurrentLayout();


	}

	fetchCurrentLayout() {
		wp.apiFetch({path: '/beans/v1/layout-default-selected', method: 'GET'}).then((types) => {
			this.setState({layoutSelected: types});
		});
	}

	getCurrentLayout() {
		if (this.state && this.state.layoutSelected && this.props && this.props.currentPostType) {
			return this.state.layoutSelected[this.props.currentPostType]
		}
		return 'c'
	}


	render() {
		return (
			<Fragment>
				<Fill name="BeansSidebar">
					<PanelBody
						initialOpen={false}
						title={__('Default ' + this.props.currentPostType + ' layouts', 'tm-beans')}
						icon={getSmallIconFromLayout(this.getCurrentLayout())}
					>
						<SwitcherControler
							currentLayout={this.getCurrentLayout()}
							currentPostType={this.props.currentPostType}
							onLayoutChange={this.fetchCurrentLayout}
						/>
					</PanelBody>
				</Fill>
			</Fragment>
		)
	}
}


const HOC = withSelect((select) => {
	const postType = select('core/editor').getCurrentPostType();
	return {
		currentPostType: postType,
	};
})(BeansDefaultLayout);

registerPlugin('beans-layout-controller', {
	render: HOC,
});

