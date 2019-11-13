const { Icon } = wp.components;
const { withDispatch, select } = wp.data;

const SwitcherButton = ({
  label,
  icon,
							value,
  layout,
  blockIds,
  removeBlocks,
  resetBlocks,
  insertBlock,
							onMetaFieldChange
}) => {
  return (
    <button
      onClick={() => {
        console.log(value);
        // removeBlocks(blockIds);
        // resetBlocks([]);
        // insertBlocks(layout);
		  onMetaFieldChange(value)
      }}
    >
      <Icon icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default withDispatch(dispatch => {
  const { removeBlocks, resetBlocks, insertBlocks, insertBlock } = dispatch(
    "core/editor"
  );
  return {
	  onMetaFieldChange: (value) => {
				dispatch('core/editor').editPost({meta: {_myprefix_text_metafield: value}})
			},
    removeBlocks,
    resetBlocks,
    insertBlock,
    insertBlocks
  };
})(SwitcherButton);


// PluginMetaFields = withDispatch(
// 	(dispatch) => {
// 		return {
// 			onMetaFieldChange: (value) => {
// 				dispatch('core/editor').editPost({meta: {_myprefix_text_metafield: value}})
// 			}
// 		}
// 	}
// )(PluginMetaFields);

