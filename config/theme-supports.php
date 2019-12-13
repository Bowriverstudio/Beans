<?php
/**
 * Beans theme support.
 *
 * Theme runtime configuration
 *
 */

return array(
    'title-tag' => true,
    'custom-background' => true,
    'menus' => true,
    'post-thumbnails' => true,
    'automatic-feed-links' => true,
    'html5' => array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'script', 'style',),
    'custom-header' =>
        array(
            'width' => 2000,
            'height' => 500,
            'flex-height' => true,
            'flex-width' => true,
            'header-text' => false,
        ),

    // Gutenberg Specific.
    'wp-block-styles' => true,
    'align-wide' => true,
    'editor-styles' => true,
);


