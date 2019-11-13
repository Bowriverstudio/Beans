import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, ColorPicker } from "@wordpress/components";
import { withSelect, withDispatch } from "@wordpress/data";

let PluginMetaFields = (props) => {
	return (
		<>
			<PanelBody
				title={__("Meta Fields Panel", "textdomain")}
				icon="admin-post"
				intialOpen={ true }
			>
				<TextControl
					value={props.text_metafield}
					label={__("Text Meta", "textdomain")}
					onChange={(value) => props.onMetaFieldChange(value)}
				/>

			</PanelBody>
		</>
	)
}

PluginMetaFields = withSelect(
	(select) => {
		return {
			text_metafield: select('core/editor').getEditedPostAttribute('meta')['beans_layout']
		}
	}
)(PluginMetaFields);

PluginMetaFields = withDispatch(
	(dispatch) => {
		return {
			onMetaFieldChange: (value) => {
				dispatch('core/editor').editPost({meta: {beans_layout: value}})
			}
		}
	}
)(PluginMetaFields);

registerPlugin( 'myprefix-sidebar', {
	icon: 'smiley',
	render: () => {
		return (
			<>
				<PluginSidebarMoreMenuItem
					target="myprefix-sidebar"
				>
					{__('Meta Options', 'textdomain')}
				</PluginSidebarMoreMenuItem>
				<PluginSidebar
					name="myprefix-sidebar"
					title={__('Meta Options', 'textdomain')}
				>
					<PluginMetaFields />
				</PluginSidebar>
			</>
		)
	}
})
