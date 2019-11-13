const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Button, Icon, PanelBody, PanelRow } = wp.components;
const { withSelect, dispatch } = wp.data;

import SwitcherButton from "./SwitcherButton";

const SwitcherControls = ({ blocks, icons }) => {
  const blockIds = blocks.map(block => block.clientId);
  return (
    <Fragment>
      <PanelBody title={__("Layout Choices", "jsforwpadvblocks")} opened>
        <PanelRow className="layout-switcher">
          <SwitcherButton
            label={__("C", "jsforwpadvblocks")}
            icon={icons.c}
			value='c'
          />
          <SwitcherButton
            label={__("CSP", "jsforwpadvblocks")}
            icon={icons.cs}
			value='c_sp'

          />
        </PanelRow>
      </PanelBody>
    </Fragment>
  );
};
export default withSelect(select => {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(SwitcherControls);
