import "./sidebar";

// import "./plugins/breadcrumbs";
// import "./plugins/image";
import "./plugins/remove_action";


// import { registerPlugin } from "@wordpress/plugins";
// import { PluginSidebar } from "@wordpress/edit-post";
// import { __ } from "@wordpress/i18n";
// import { PanelBody, ToggleControl } from "@wordpress/components";
// import { withDispatch } from "@wordpress/data";
// import icons from "./icons";
// import SwitcherControls from "./components/SwitcherControls";
// import BreadCrumbsControls from "./components/BreadCrumbsControls";
//
// let PluginMetaFields = (props) => {
//
// 	return (
// 		<>
// 			<PanelBody
// 				title={__("Layout", "tm-beans")}
// 				intialOpen={ true }
// 			>
// 				<SwitcherControls icons={icons}  />
//
// 			</PanelBody>
// 		</>
// 	)
// }
//
// PluginMetaFields = withDispatch(
// 	(dispatch) => {
// 		return {
// 			onMetaFieldChange: (value) => {
// 				dispatch('core/editor').editPost({meta: {beans_layout: value}})
// 			}
// 		}
// 	}
// )(PluginMetaFields);
//
// registerPlugin( 'beans-sidebar', {
// 	icon: icons.beans,
// 	render: () => {
// 		return (
// 			<>
// 				<PluginSidebar
// 					name="beans-sidebar"
// 					title={__('Beans', 'tm-beans')}
// 				>
//
// 					<PluginMetaFields />
// 					<BreadCrumbsControls />
//
// 				</PluginSidebar>
//
// 			</>
// 		)
// 	}
// })
