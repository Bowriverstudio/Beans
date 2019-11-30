/**
 * Hide breadcrumbs: true if breadcrumbs should be hidden, false or empty otherwise.
 * _beans_hide_breadcrumbs is registered via beans_register_block_post_meta
 *
 * Development Notes:
 * wp.data.select('core/editor').getEditedPostAttribute('meta')['_beans_hide_breadcrumbs']
 *
 *
 */
const {__} = wp.i18n;
const {Fragment} = wp.element;
const {PanelBody, ToggleControl} = wp.components;
const {withSelect} = wp.data;


const BreadCrumbsControls = ({ _beans_hide_breadcrumbs}) => {
	return (
		<Fragment>
			<PanelBody>
				<ToggleControl
					label={__("Toggle Control", "tm-beans")}
					checked={_beans_hide_breadcrumbs}
					// onChange={toggleControl => setAttributes({ toggleControl })}
				/>
			</PanelBody>
		</Fragment>
	);
};

export default withSelect(
	(select) => {
		return {
			_beans_hide_breadcrumbs: select('core/editor').getEditedPostAttribute('meta')['_beans_hide_breadcrumbs']
		}
	})(BreadCrumbsControls);


