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
import {withSelect, withDispatch} from '@wordpress/data';
import {Fill, PanelBody} from '@wordpress/components';
import {registerPlugin} from '@wordpress/plugins';
import {compose} from '@wordpress/compose';


/**
 * Internal dependencies
 */
import {newMeta} from '../../lib/new-meta.js';
import {getSmallIconFromLayout} from '../../lib/layout'
import {SwitcherControler} from "./SwitcherControls.js";

class BeansDefaultLayout extends Component {
	constructor() {
		super(...arguments);

		this.getCurrentDefaultLayout = this.getCurrentDefaultLayout.bind(this)
		this.fetchCurrentLayout = this.fetchCurrentLayout.bind(this)

	}
	componentDidMount() {
		this.fetchCurrentLayout();

	}

		fetchCurrentLayout() {
		wp.apiFetch({path: '/beans/v1/layout-default-selected', method: 'GET'}).then((types) => {
			this.setState({layoutSelected: types});
		});
	}

	getCurrentDefaultLayout() {
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
						initialOpen={true}
						title={__('Layouts', 'tm-beans')}
						icon={getSmallIconFromLayout(this.props.selected_meta_layout)}
					>

						<SwitcherControler
							currentLayout={this.props.selected_meta_layout}
							onLayoutChange={this.fetchCurrentLayout}
							onChange={this.props.onChange}
						/>
					</PanelBody>
				</Fill>
			</Fragment>
		)
	}
}


const applyWithSelect = withSelect(select => {
	return {
		selected_meta_layout: select('core/editor').getEditedPostAttribute('meta')['beans_layout']
	};
});

const applyWithDispatch = withDispatch((dispatch) => ({
	onChange(layout) {
		dispatch('core/editor').editPost(
			{meta: newMeta('beans_layout', layout)}
		);
	},
}))



// Retrieves meta from the Block Editor Redux store (withSelect) to set initial checkbox state.
// Persists it to the Redux store on change (withDispatch).
// Changes are only stored in the WordPress database when the post is updated.
const render = compose([applyWithSelect, applyWithDispatch])(BeansDefaultLayout);

registerPlugin('beans-layout-meta-controller', {
	render,
});

