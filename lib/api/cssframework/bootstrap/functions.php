<?php

namespace Beans\CSSFramework\Bootstrap;


add_filter('beans_get_container_options', __NAMESPACE__ .'\beans_get_container_options');
/**
 * List of containers classes.
 *
 * Since Beans 3.0.0
 * @return array
 */
function beans_get_container_options(){
    return array(
        '' => ['label' => __('None', 'tm-beans')],
        'container' => ['label' => __('container', 'tm-beans')],
        'container-sm' => ['label' => __('container-sm', 'tm-beans')],
        'container-md' => ['label' => __('container-md', 'tm-beans')],
        'container-lg' => ['label' => __('container-lg', 'tm-beans')],
        'container-xl' => ['label' => __('container-xl', 'tm-beans')],
        'container-fluid' => ['label' => __('container-fluid', 'tm-beans')],
    );
}