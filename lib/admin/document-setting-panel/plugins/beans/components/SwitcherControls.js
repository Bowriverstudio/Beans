const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Button, Icon, PanelBody, PanelRow } = wp.components;
const { withSelect, dispatch } = wp.data;

import SwitcherButton from "./SwitcherButton";
import ResetControls from "./ResetControls";

const SwitcherControls = ({ blocks, icons, layouts }) => {
  const blockIds = blocks.map(block => block.clientId);
  return (
    <Fragment>
      <PanelBody title={__("Layout Choices", "jsforwpadvblocks")} opened>
        <PanelRow className="layout-switcher">
          <SwitcherButton
            label={__("c", "jsforwpadvblocks")}
            icon={icons.c}
            blockIds={blockIds}
            layout={layouts.c}
          />
          <SwitcherButton
            label={__("c-sp", "jsforwpadvblocks")}
            icon={icons.cs}
            blockIds={blockIds}
            layout={layouts.cs}
          />
        </PanelRow>
      </PanelBody>
      <PanelBody title={__("Reset Layout", "jsforwpadvblocks")}>
        <PanelRow>
          <ResetControls layout={layouts.default} />
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
