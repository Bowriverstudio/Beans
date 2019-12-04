const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import apiFetch from '@wordpress/api-fetch';

const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

const MyComponentBase = ({ createNotice, blocks, className }) => {
	const triggerNotice = (type) => {
		createNotice(type, __('Hello, Notices Data!', 'gwg'));
	}


	return (
		<div className={className}>
			<p>{__('Functional Component', 'gwg')}</p>

			<ul>
				<li><a onClick={() => triggerNotice('info')}>Trigger info notice</a></li>
				<li><a onClick={() => triggerNotice('error')}>Trigger error notice</a></li>
				<li><a onClick={() => triggerNotice('warning')}>Trigger warning notice</a></li>
				<li><a onClick={() => triggerNotice('success')}>Trigger success notice</a></li>
			</ul>

			<ul>
				{blocks.map(block => <li>{block.name}</li>)}
			</ul>
		</div>
	);
}

// const rootURL = "http://my-wordpress-site/wp-json/";
// apiFetch.use( apiFetch.createRootURLMiddleware( rootURL ) );

// const applyComponentDidMount = componentDidMount() => {
	// 	apiFetch( { path: '/beans/v1/remove-actions-options' } ).then( ( types ) => {
// 		console.log(types)
// 		this.setState( { removeActionsOptions: types } );
// 	} );
//
// 	apiFetch( { path: '/beans/v1/breadcrumbs' } ).then( ( types ) => {
// 		this.setState( { typesWithBreadcrumbsEnabled: types } );
// 	} );
//
// 	apiFetch( { path: '/wp/v2/users/me?context=edit' } ).then( ( user ) => {
// 		if ( user.capabilities.edit_theme_options ) {
// 			this.setState( { currentUserCanEditThemeOptions: user.capabilities.edit_theme_options } );
// 		}
// 	} );
//
// }

const applyWithSelect = withSelect(select => {
	const { getBlocks } = select('core/editor');
	return { blocks: getBlocks() };
});

const applyWithDispatch = withDispatch(dispatch => {
	const { createNotice } = dispatch('core/notices');
	return { createNotice: createNotice };
});

// const applyComponentDidMount = componentDidMount( props => {
// 	console.log(this.props.name, ": componentDidMount()");
// });

export const MyComponent = compose(
	applyWithSelect,
	applyWithDispatch,
)(MyComponentBase);
