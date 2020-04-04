<?php

/**
 * This class handles the importing the bootstrap block editor settings - including fonts and colors.
 *
 * @package Beans\Framework\Admin\Onboarding
 *
 * @since 2.0.0
 */


namespace Beans\Lib\API\BOOTSTAP;

final class _Beans_Lib_API_Bootstrap_Block_Editor_Settings
{

    // variables = [ { name , value, compiledValue }] 
    private $variables;

	public function load_settings()
	{
        
        $this->set_variables();

        // theme_colors = [ ] 
        $theme_colors = beans_get_config_json('theme-colors', 'bootstrap');

        $editor_color_palette = array();
        foreach( $theme_colors as $color ){
            $slug = str_replace('$', '', $color);
            $title = ucfirst($slug);
            $value = $this->get_variable_value($color);
            $editor_color_palette[] = array(
                'name'  => __( $title, 'beans' ),
                'slug'  => $slug,
                'color'	=> $value,
            );
        }
// Disable Custom Colors
// add_theme_support( 'disable-custom-colors' );
        add_theme_support( 'editor-color-palette',  $editor_color_palette );

    }
    
    private function set_variables(){
        // variables = [ { name , value, compiledValue }] 
        $this->variables = beans_get_config_json('_variables', 'bootstrap');
    }

    private function get_variable_value($name){
        foreach($this->variables as $variable){
            if( $variable['name'] == $name){
                
                if( $variable['compiledValue'] != "" ){
                    return $variable['compiledValue'];
                }

                // For Case:
                // name => string (8) "$primary"
                // ⇄value => string (5) "$blue"
                // ⇄compiledValue => string (0) ""
                $firstCharacter = substr($variable['value'], 0, 1);
                if( $firstCharacter == '$' ){
                    return $this->get_variable_value($variable['value']);
                }

                return $variable['value'];
            }
        }
    }

}

$temp = new _Beans_Lib_API_Bootstrap_Block_Editor_Settings();
$temp->load_settings();