<?php

function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
  wp_enqueue_style('template', get_theme_file_uri('/src/scripts/components/timeline.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

function register_my_menus() {
  register_nav_menus(
      array(
          'primary' => __( 'Primary Menu' ),
          'footer' => __( 'Footer Menu' )
      )
  );
}
add_action( 'init', 'register_my_menus' );

function add_tags_string_to_rest_api() {
  register_rest_field( 'services', 
      'article-tags', 
      array(
          'get_callback' => 'get_tags_as_string',
          'schema'       => null,
      )
  );
}

function get_tags_as_string( $object ) {
  $post_id = $object['id'];

  $tags = wp_get_post_terms( $post_id, 'article-tags' ); 

  if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
    $tag_names = wp_list_pluck( $tags, 'name' );
    $tag_names = array_map( function( $name ) {
      return '#' . $name;
  }, $tag_names );
    return implode(' ', $tag_names);
  }

  return ''; 
}

add_action( 'rest_api_init', 'add_tags_string_to_rest_api' );
