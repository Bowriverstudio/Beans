/**
 * Provides a BeansBreadcrumbsToggleInfo component that displays the state
 * of the global “breadcrumbs” Customzier checkbox for the current page type.
 *
 * Offers a link to either disable or enable breadcrumbs site-wide for
 * the current page type. The goal is to reduce the need to leave the editor
 * and visit the Customizer to turn breadcrumbs on or off.
 *
 * @since   3.1.0
 * @package Beans\JS
 * @author  StudioPress
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { select, withSelect } from '@wordpress/data';
import { Spinner } from '@wordpress/components';
import { speak } from '@wordpress/a11y';
import apiFetch from '@wordpress/api-fetch';

class BreadcrumbsToggleInfo extends Component {
	constructor( props ) {
		super( props );

		// Enable access to this.props inside `updateBreadcrumbsSetting`.
		this.updateBreadcrumbsSetting = this.updateBreadcrumbsSetting.bind( this );

		this.state = {
			typesWithBreadcrumbsEnabled: [],
			isStaticHomepage: false,
			isPostsPage: false,
			currentUserCanEditThemeOptions: false,
			updating: false,
		};
	}

	/**
	 * Gets items with breadcrumbs enabled, user capabilities, and reading settings.
	 */
	componentDidMount() {
		apiFetch( { path: '/beans/v1/breadcrumbs' } ).then( ( types ) => {
			this.setState( { typesWithBreadcrumbsEnabled: types } );
		} );

		apiFetch( { path: '/wp/v2/users/me?context=edit' } ).then( ( user ) => {
			if ( user.capabilities.edit_theme_options ) {
				this.setState( { currentUserCanEditThemeOptions: user.capabilities.edit_theme_options } );
			}
		} );

		// apiFetch( { path: '/beans/v1/reading-settings' } ).then( ( settings ) => {
		// 	if (
		// 		settings.show_on_front === 'page' &&
		// 		settings.page_on_front === this.props.currentPostID
		// 	) {
		// 		this.setState( { isStaticHomepage: true } );
		// 	}
		//
		// 	if (
		// 		settings.show_on_front === 'posts' &&
		// 		settings.page_for_posts === this.props.currentPostID
		// 	) {
		// 		this.setState( { isPostsPage: true } );
		// 	}
		// } );
	}

	/**
	 * Gets the label for the current page.
	 *
	 * @return {string} The label.
	 */
	getPageLabel() {
		if ( this.state.isStaticHomepage ) {
			/* translators: should match the “Homepage” label from Settings -> Reading. Note lowercase t in 'the'. */
			return __( 'the Homepage', 'beans' );
		}

		if ( this.state.isPostsPage ) {
			/* translators: should match the “Posts Page ” label from Settings -> Reading. Note lowercase t in 'the'. */
			return __( 'the Posts Page', 'beans' );
		}

		return this.props.currentPostTypeLabel;
	}

	/**
	 * Determines if status text should be displayed.
	 *
	 * We only show text for posts, pages, and static home and posts pages.
	 *
	 * @return {boolean} True if status text should not be displayed.
	 */
	breadcrumbStatusTextIsNotSupported() {
		return ! this.state.currentUserCanEditThemeOptions &&
			! this.state.isStaticHomepage &&
			! this.state.isPostsPage &&
			! [ 'post', 'page' ].includes( this.props.currentPostType );
	}

	/**
	 * Gives current state of the “show breadcrumbs” Beans settings
	 * for the current page type the user is editing.
	 *
	 * @return {boolean} True if current page type has breadcrumbs disabled.
	 */
	postTypeHasBreadcrumbsDisabled() {

		if ( this.props.currentPostType === 'post' ) {
			return ! this.state.typesWithBreadcrumbsEnabled.includes( 'single' );
		}

		if ( this.props.currentPostType === 'page' ) {
			return ! this.state.typesWithBreadcrumbsEnabled.includes( 'page' );
		}

		return '';
	}

	/**
	 * Get the Beans breadcrumb option name to update based on the current page.
	 *
	 * @return {string} Beans breadcrumbs setting value.
	 */
	breadcrumbsValueToUpdate() {

		if ( this.props.currentPostType === 'post' ) {
			return 'single';
		}

		if ( this.props.currentPostType === 'page' ) {
			return 'page';
		}

		return '';
	}

	/**
	 * Sets the “show breadcrumbs on (post-type)” setting to `newValue`
	 * for the current post type.
	 *
	 * @param {number} newValue 1 to turn singular/breadcrumbs for the
	 *                          current post type on. 0 to turn them off.
	 *
	 * @return {boolean} False to prevent default button actions.
	 */
	updateBreadcrumbsSetting( newValue ) {
		this.setState( { updating: true } );

		const breadcrumbsOption = this.breadcrumbsValueToUpdate();

		const data = {
			[ breadcrumbsOption ]: newValue,
		};

		const putRequest = {
			path: '/beans/v1/breadcrumbs',
			method: 'PUT',
			data,
		};

		apiFetch( putRequest ).then( ( types ) => {
			this.setState( {
				updating: false,
				typesWithBreadcrumbsEnabled: types,
			} );

			const pageLabel = this.getPageLabel();

			/* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
			let statusAnnouncement = sprintf( __( 'Breadcrumbs now visible on %s.', 'beans' ), pageLabel );

			if ( this.postTypeHasBreadcrumbsDisabled() ) {
				/* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
				statusAnnouncement = sprintf( __( 'Breadcrumbs are hidden on %s.', 'beans' ), pageLabel );
			}
			speak( statusAnnouncement, 'assertive' );
		} );

		return false;
	}

	render() {
		if ( this.breadcrumbStatusTextIsNotSupported() ) {
			return '';
		}

		const pageLabel = this.getPageLabel();

		if ( this.state.updating ) {
			/* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
			let label = sprintf( __( 'Disabling breadcrumbs on %s...', 'beans' ), pageLabel );

			if ( this.postTypeHasBreadcrumbsDisabled() ) {
				/* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
				label = sprintf( __( 'Enabling breadcrumbs on %s...', 'beans' ), pageLabel );
			}

			return (
				<p>
					<span>{ label }</span>
					<Spinner />
				</p>
			);
		}

		let textClass = 'beans-sidebar-label-enabled';
		/* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
		let statusText = sprintf( __( 'Breadcrumbs are enabled on %s. ', 'beans' ), pageLabel );
		/* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
		let ariaText = sprintf( __( 'Disable breadcrumbs on %s?' ), pageLabel );
		let linkText = __( 'Disable breadcrumbs.', 'beans' );
		let newBreadcrumbsState = 0; // Turn breadcrumbs off.

		if ( this.postTypeHasBreadcrumbsDisabled() ) {
			textClass = 'beans-sidebar-label-disabled';
			/* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
			statusText = sprintf( __( 'Breadcrumbs are disabled on %s.', 'beans' ), pageLabel );
			/* translators: %s: the current page label, such as “Pages” or “the Homepage”. */
			ariaText = sprintf( __( 'Enable breadcrumbs on %s' ), pageLabel );
			linkText = __( 'Enable breadcrumbs.', 'beans' );
			newBreadcrumbsState = 1; // Turn breadcrumbs on.
		}

		return (
			<p className={ textClass }>
				{ statusText + ' ' }
				<button
					className="beans-sidebar-text-button"
					onClick={ () => this.updateBreadcrumbsSetting( newBreadcrumbsState ) }
					aria-label={ ariaText }
				>
					{ linkText }
				</button>
			</p>
		);
	}
}

// Get current post type, label, and post ID from the Block Editor Redux store.
export const BeansBreadcrumbsToggleInfo = compose( [
	withSelect( () => {
		const postType = select( 'core/editor' ).getCurrentPostType();
		return {
			currentPostType: postType,
			currentPostTypeLabel: select( 'core' ).getPostType( postType ).name || __( 'Entries', 'beans' ),
			currentPostID: select( 'core/editor' ).getCurrentPostId(),
		};
	} ),
] )( BreadcrumbsToggleInfo );
