const { Icon } = wp.components;
// const { withDispatch, select } = wp.data;
import {select, withDispatch, withSelect} from "@wordpress/data";

let SwitcherButton = ({
  label,
  icon,
	alt,
							value,
						  selected_beans_layout,
						  text_metafield,
  layout,
  blockIds,
  removeBlocks,
  resetBlocks,
  insertBlock,
							onMetaFieldChange
}) => {


	const className = (selected_beans_layout ==  value)?'selected':''

  return (

    <button className={className}
      onClick={() => {
        // removeBlocks(blockIds);
        // resetBlocks([]);
        // insertBlocks(layout);
		  onMetaFieldChange(value)
      }}
    >
      <Icon icon={icon}

	  />
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
				dispatch('core/editor').editPost({meta: {beans_layout: value}})
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
// 				dispatch('core/editor').editPost({meta: {beans_layout: value}})
// 			}
// 		}
// 	}
// )(PluginMetaFields);

