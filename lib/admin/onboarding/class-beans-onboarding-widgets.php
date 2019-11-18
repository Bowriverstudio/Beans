<?php
/**
 * This class handles the widgets onboarding.
 *
 * @package Beans\Framework\Admin\Onboarding
 *
 * @since 2.0.0
 */

/**
 * Beans admin page.
 *
 * @since   2.0.0
 * @ignore
 * @access  private
 *
 * @package Beans\Framework\Admin\Onboarding
 */
namespace Beans\Admin\Onboarding;

final class _Beans_Admin_Onboarding_Widgets
{
	public function onboarding_widgets()
	{
		$config = _beans_onboarding_config();
		return isset($config['widgets']) ? (array)$config['widgets'] : [];
	}


	/**
	 * Beans Widget content.
	 *
	 * @return void
	 * @since 2.0.0
	 *
	 */
	public function display()
	{
		__( '<h3>Widget List</h3>');
		__( '<p>Will import widgets into the defined widget areas.</p>');
		printf( '<p>There is a total of %s widget areas defined for importing.</p>', sizeof(self::onboarding_widgets()));
	}


	/**
	 * Inserts widgets from the onboarding config file.
	 *
	 * @since 2.0.0
	 *
	 */
	public function import_widgets( ) {
		$widget_areas = self::onboarding_widgets();

		global $wp_registered_sidebars, $wp_registered_widgets;

		if ( ! $widget_areas || ! $wp_registered_sidebars) {
			return;
		}

		$_wp_sidebars_widgets = get_option('sidebars_widgets', array());

		foreach($widget_areas as $sidebar => $widget_area){

			if( key_exists($sidebar, $wp_registered_sidebars) &&
				key_exists( $sidebar, $_wp_sidebars_widgets) &&
				count($_wp_sidebars_widgets[$sidebar]) == 0 &&
				is_array($widget_areas[$sidebar])){
				foreach( $widget_areas[$sidebar] as $widget_array){
					self::insert_widget($sidebar, $widget_array['type'], $widget_array['args']);
				}
			}
		}
	}

	/**
	 * Inserts a widget into the named sidebar by updating the `wp_options` table.
	 *
	 * @since 2.0.0
	 * @author genesis
	 *
	 * @param string $sidebar The slug of the widget area to add the widget to.
	 * @param string $type The type of widget. The value after 'widget_' in the
	 *                     `wp_options` table option_name column.
	 * @param array  $args The widget's properties. The unserialized content of a
	 *                     single widget in the `widget_{$type}` row in `wp_options`.
	 */
	private function insert_widget( $sidebar, $type, $args = [] ) {
		if ( empty( $args ) ) {
			return;
		}

		$widgets = get_option( "widget_{$type}" );

		if ( ! $widgets ) {
			$widgets = [ '_multiwidget' => 1 ];
		}

		// Store the new widget with those of the same type.
		$next_widget_id             = self::get_next_widget_id( $widgets );
		$widgets[ $next_widget_id ] = $args;
		update_option( "widget_{$type}", $widgets );

		// Add the new widget to the given sidebar.
		$sidebars               = get_option( 'sidebars_widgets', [] );
		$sidebars[ $sidebar ][] = "{$type}-{$next_widget_id}";
		update_option( 'sidebars_widgets', $sidebars );
	}

	/**
	 * Gets the next widget ID for widgets of a given type.
	 *
	 * This is the ID that would be used to insert a new widget of that type into
	 * the `widget_[type]` row in the `wp_options` table.
	 *
	 * Since 2.0.0
	 * @author genesis
	 *
	 * @param array $widgets Widgets of one type, typically retrieved via
	 *                       `get_option( "widget_[type]" );`.
	 * @return int The next ID to use for a new widget.
	 */
	private function get_next_widget_id( $widgets ) {
		// Strip non-numeric keys such as '_multiwidget'.
		$widgets = array_filter( $widgets, 'is_numeric', ARRAY_FILTER_USE_KEY );

		if ( ! $widgets ) {
			return 1;
		}

		ksort( $widgets ); // Highest index last.
		end( $widgets ); // Pointer to last widget.

		return key( $widgets ) + 1;
	}


}

