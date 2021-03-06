const {__} = wp.i18n;
const {Fragment} = wp.element;
const {PanelBody, PanelRow} = wp.components;
const {withSelect} = wp.data;

import SwitcherButton from "./SwitcherButton";

const SwitcherControls = ({ icons, selected_beans_layout}) => {
	return (
		<Fragment>
			<PanelBody>
				<PanelRow className="layout-switcher">
					<SwitcherButton
						label={__("Default", "tm-beans")}
						icon={icons.beans}
						value=''
						alt={__('Default', 'tm-beans')}
						screen_reader_text={__('Default.', 'tm-beans')}
						selected_beans_layout={selected_beans_layout}
//						@TODO - Load default icon from get_options
//						@TODO - change to a loop
					/>
					<SwitcherButton
						label={__("c", "tm-beans")}
						icon={icons.c}
						value='c'
						alt={__('Full-Width Content Layout', 'tm-beans')}
						screen_reader_text={__('Option for the Full-Width Content Layout.', 'tm-beans')}
						selected_beans_layout={selected_beans_layout}

					/>
					<SwitcherButton
						label={__("c_sp", "tm-beans")}
						icon={icons.cs}
						value='c_sp'
						alt={__('Content and Primary Sidebar Layout', 'tm-beans')}
						screen_reader_text={__('Option for the Content and Primary Sidebar Layout.', 'tm-beans')}
						selected_beans_layout={selected_beans_layout}

					/>
					<SwitcherButton
						label={__("sp_c", "tm-beans")}
						icon={icons.sc}
						value='sp_c'
						alt={__('Primary Sidebar and Content Layout', 'tm-beans')}
						screen_reader_text={__('Option for the Primary Sidebar and Content Layout.', 'tm-beans')}
						selected_beans_layout={selected_beans_layout}

					/>
					<SwitcherButton
						label={__("c_sp_ss", "tm-beans")}
						icon={icons.css}
						value='c_sp_ss'
						alt={__('Content, Primary Sidebar and Secondary Sidebar Layout', 'tm-beans')}
						screen_reader_text={__('Option for the Content, Primary Sidebar and Secondary Sidebar Layouts.', 'tm-beans')}
						selected_beans_layout={selected_beans_layout}

					/>
					<SwitcherButton
						label={__("sp_ss_c", "tm-beans")}
						icon={icons.ssc}
						value='sp_ss_c'
						alt={__('Primary Sidebar, Secondary Sidebar and Content Layout', 'tm-beans')}
						screen_reader_text={__('Option for the Primary Sidebar, Secondary Sidebar and Content Layout.', 'tm-beans')}
						selected_beans_layout={selected_beans_layout}

					/>
					<SwitcherButton
						label={__("sp_c_ss", "tm-beans")}
						icon={icons.scs}
						value='sp_c_ss'
						alt={__('Primary Sidebar, Content and Secondary Sidebar Layout', 'tm-beans')}
						screen_reader_text={__('Option for the Primary Sidebar, Content and Secondary Sidebar Layout.', 'tm-beans')}
						selected_beans_layout={selected_beans_layout}

					/>
				</PanelRow>
			</PanelBody>
		</Fragment>
	);
};
export default withSelect(
	(select) => {
		return {
			selected_beans_layout: select('core/editor').getEditedPostAttribute('meta')['beans_layout']
		}
})(SwitcherControls);
