const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { InspectorControls, InnerBlocks } = wp.editor;
const { PanelBody, SelectControl } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("ibenic/inner-blocks", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("Inner Blocks"), // Block title.
	icon: "screenoptions", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__("inner-blocks")],

	attributes: {
		paid: {
			type: "string"
		}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function(props) {
		const { attributes, setAttributes } = props;
		// Creates a <p class='wp-block-cgb-block-inner-blocks'></p>.
		return [
			<InspectorControls>
				<PanelBody title={__("Content Settings")}>
					<SelectControl
						label={__("Hide this if user:")}
						value={attributes.paid}
						options={[
							{
								label: __("Has a Paid Membership"),
								value: "true"
							},
							{
								label: __("Does not have a Paid Membership"),
								value: "false"
							}
						]}
						onChange={paid => {
							setAttributes({ paid });
						}}
					/>
				</PanelBody>
			</InspectorControls>,
			<div className={props.className}>
				{__("Add Blocks that you can hide or show based on criteria")}
				<InnerBlocks />
			</div>
		];
	},
	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function(props) {
		return <InnerBlocks.Content />;
	}

	// edit and save methods are here...
});
