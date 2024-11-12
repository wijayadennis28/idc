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
  register_rest_field( 'services', // TODO: Change to articles
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

function add_custom_field_to_doctors_api() {
  register_rest_field( 'doctors',
      'service_name', 
      array(
          'get_callback' => 'get_service_name',
          'schema'       => null,
      )
  );
  register_rest_field( 'doctors',
      'thumbnail', 
      array(
          'get_callback' => 'get_thumbnail',
          'schema'       => null,
      )
  );
}

function get_service_name( $object ) {
  if (empty($object['meta']['service'])) return '';
  $service = get_post($object['meta']['service']);

  return $service->post_title;
}

function get_thumbnail( $object ) {
  return get_the_post_thumbnail_url($object['id']) ?: '';
}

add_action( 'rest_api_init', 'add_custom_field_to_doctors_api' );

function add_doctor_details_to_services_api() {
  register_rest_field( 'services',
      'doctors', 
      array(
          'get_callback' => 'get_doctor_details',
          'schema'       => null,
      )
  );
}

function get_doctor_details( $object ) {
  if (empty($object['meta']['doctors'])) return [];
  $doctor_ids = $object['meta']['doctors'];
  $doctor_details = [];
  for ($i = 0; $i < count($doctor_ids); $i++) {
    $permalink = get_permalink(($doctor_ids[$i]));
    $thumbnail = get_the_post_thumbnail_url($doctor_ids[$i]) ?: '';
    $name = get_the_title($doctor_ids[$i]);
    $doctor_data = [
      'permalink' => $permalink,
      'thumbnail' => $thumbnail,
      'name' => $name
    ];
    array_push($doctor_details, $doctor_data);
  }
  return $doctor_details;
}

add_action( 'rest_api_init', 'add_doctor_details_to_services_api' );
