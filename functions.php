<?php

function load_stylesheet() {
    wp_register_style('style', get_template_directory_uri() . '/style.css', array(), 1, 'all');
    wp_enqueue_style('style'); 

    wp_register_style('custom', get_template_directory_uri() . '/custom.css', array(), 1, 'all');
    wp_enqueue_style('custom');
}

add_action('wp_enqueue_scripts', 'load_stylesheet');









//Load scripts 

function addJs(){
    wp_register_script('JavaScript', get_template_directory_uri() . '/js/javaScript.js', array(), 1, 1, 1);
    wp_enqueue_script('JavaScript');

    wp_register_script('textOnHover', get_template_directory_uri() . '/js/textOnHover.js', array(), 1, 1, 1);
    wp_enqueue_script('textOnHover');

    wp_register_script('custom', get_template_directory_uri() . '/custom.js', array(), 1, 1, 1);
    wp_enqueue_script('custom');
}

add_action('wp_enqueue_scripts', 'addJs');

?>