<?php
function my_theme_enqueue_scripts() {
   // wp_enqueue_style( 'tailwindcss', get_template_directory_uri() . '/dist/style.css' );
   // wp_enqueue_script( 'react-js', get_template_directory_uri() . '/dist/app.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_scripts' );
