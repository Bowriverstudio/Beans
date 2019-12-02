/**
 * Provides a GenesisImageToggleInfo component that displays the state
 * of the “display Singular Images” checkbox for the current post type.
 *
 * Offers a link to either disable or enable Singular Images site-wide
 * for the current post type. The goal is to reduce the need to leave
 * the editor and visit the Customizer to turn Singular Image on or off.
 *
 * @since   3.1.0
 * @package Genesis\JS
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

class ImageToggleInfo extends Component {
	constructor( props ) {
		super( props );

		// Enable access to this.props inside `updateSingularImagesSetting`.
		this.updateSingularImagesSetting = this.updateSingularImagesSetting.bind( this );

		this.state = {
			typesWithSingularImagesEnabled: [],
			currentUserCanEditThemeOptions: false,
			updating: false,
		};
	}

	/**
	 * Gets post types with singular images enabled and user capabilities.
	 */
	componentDidMount() {
		apiFetch( { path: '/genesis/v1/singular-images' } ).then( ( types ) => {
			this.setState( { typesWithSingularImagesEnabled: types } );
		} );

		apiFetch( { path: '/wp/v2/users/me?context=edit' } ).then( ( user ) => {
			if ( user.capabilities.edit_theme_options ) {
				this.setState( { currentUserCanEditThemeOptions: user.capabilities.edit_theme_options } );
			}
		} );
	}

	/**
	 * Gives current state of the “show featured images on…” Genesis setting
	 * for the current post type the user is editing.
	 *
	 * @return {boolean} True if current post type has singular images disabled.
	 */
	postTypeHasSingularImagesDisabled() {
		return ! this.state.typesWithSingularImagesEnabled.includes( this.props.currentPostType );
	}

	/**
	 * Sets the “show featured images on (post-type)” setting to `newValue`
	 * for the current post type.
	 *
	 * @param {number} newValue 1 to turn singular/featured images for the
	 *                          current post type on. 0 to turn them off.
	 *
	 * @return {boolean} False to prevent default button actions.
	 */
	updateSingularImagesSetting( newValue ) {
		this.setState( { updating: true } );

		const data = {
			[ this.props.currentPostType ]: newValue,
		};

		const putRequest = {
			path: '/genesis/v1/singular-images',
			method: 'PUT',
			data,
		};

		apiFetch( putRequest ).then( ( types ) => {
			this.setState( {
				updating: false,
				typesWithSingularImagesEnabled: types,
			} );

			/* translators: %s: the current page type, such as “Pages” or “Posts”. */
			let statusAnnouncement = sprintf( __( 'Featured images now enabled on %s.', 'genesis' ), this.props.currentPostTypeLabel );

			if ( this.postTypeHasSingularImagesDisabled() ) {
				/* translators: %s: the current page type, such as “Pages” or “Posts”. */
				statusAnnouncement = sprintf( __( 'Featured images now disabled on %s.', 'genesis' ), this.props.currentPostTypeLabel );
			}
			speak( statusAnnouncement, 'assertive' );
		} );

		return false;
	}

	render() {
		if ( ! this.state.currentUserCanEditThemeOptions ) {
			return '';
		}

		if ( this.state.updating ) {
			/* translators: %s: the current page type, such as “Pages” or “Posts”. */
			let label = sprintf( __( 'Disabling images on %s...', 'genesis' ), this.props.currentPostTypeLabel );

			if ( this.postTypeHasSingularImagesDisabled() ) {
				/* translators: %s: the current page type, such as “Pages” or “Posts”. */
				label = sprintf( __( 'Enabling images on %s...', 'genesis' ), this.props.currentPostTypeLabel );
			}

			return (
				<p>
					<span>{ label }</span>
					<Spinner />
				</p>
			);
		}

		let textClass = 'genesis-sidebar-label-enabled';
		/* translators: %s: the current page type, such as “Pages” or “Posts”. */
		let statusText = sprintf( __( 'Featured images are enabled on %s. ', 'genesis' ), this.props.currentPostTypeLabel );
		/* translators: %s: the current page type, such as “Pages” or “Posts”. */
		let ariaText = sprintf( __( 'Disable featured images on all %s?' ), this.props.currentPostTypeLabel );
		let linkText = __( 'Disable images.', 'genesis' );
		let newImageState = 0; // Turn featured images off.

		if ( this.postTypeHasSingularImagesDisabled() ) {
			textClass = 'genesis-sidebar-label-disabled';
			/* translators: %s: the current page type, such as “Pages” or “Posts”. */
			statusText = sprintf( __( 'Featured images are disabled on %s.', 'genesis' ), this.props.currentPostTypeLabel );
			/* translators: %s: the current page type, such as “Pages” or “Posts”. */
			ariaText = sprintf( __( 'Enable featured images on all %s' ), this.props.currentPostTypeLabel );
			linkText = __( 'Enable images.', 'genesis' );
			newImageState = 1; // Turn featured images on.
		}

		return (
			<p className={ textClass }>
				{ statusText + ' ' }
				<button
					className="genesis-sidebar-text-button"
					onClick={ () => this.updateSingularImagesSetting( newImageState ) }
					aria-label={ ariaText }
				>
					{ linkText }
				</button>
			</p>
		);
	}
}

// Get current post type and label from the Block Editor Redux store.
export const GenesisImageToggleInfo = compose( [
	withSelect( () => {
		const postType = select( 'core/editor' ).getCurrentPostType();
		return {
			currentPostType: postType,
			currentPostTypeLabel: select( 'core' ).getPostType( postType ).name || __( 'Entries', 'genesis' ),
		};
	} ),
] )( ImageToggleInfo );
