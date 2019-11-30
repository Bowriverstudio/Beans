/**
 * Builds new meta for use when saving post data. Refactored from StudioPress.
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 */

/**
 * WordPress dependencies
 */
import { select } from '@wordpress/data';

/**
 * Builds the new Beans meta given a new key and value.
 *
 * Ensures that:
 * 1. Only Beans meta is updated when saving Beans settings
 * 2. A value of 'false' is sent instead of null for empty checkboxes, fixing
 * 3. Checkboxes do not flicker on and off when saving posts. See “additional
 * info”
 *
 * @param {string} newKey
 * @param {*} newValue
 * @return {Object} Beans meta keys and values.
 */
export function newMeta( newKey, newValue ) {
	const currentMeta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
	const beansMeta = Object.keys( currentMeta )
		.filter( ( key ) => key.startsWith( '_beans' ) )
		.reduce( ( obj, key ) => {
			obj[ key ] = currentMeta[ key ];
			if ( obj[ key ] === null ) {
				obj[ key ] = false;
			}
			return obj;
		}, {} );

	return {
		...beansMeta,
		[ newKey ]: newValue,
	};
}
