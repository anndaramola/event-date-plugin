<?php

/**
 * Plugin Name: Event Block
 * Plugin URI: https://wordpress.codesista.com
 * Description: Adds new Gutenberg block to the “posts” post type.
 * Version: 1.0
 * Author: Ann Daramola
 *
 * @package codesista
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'codesista_load_textdomain' );

function codesista_load_textdomain() {
	load_plugin_textdomain( 'codesista', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function codesista_register_block() {

	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	register_post_meta('post', 'codesista_event_date', [
		'single' => true,
		'show_in_rest' => true
	]);

	register_post_meta('post', 'codesista_nice_event_date', [
		'single' => true,
		'show_in_rest' => true
	]);

	wp_register_script(
		'codesista-event-block-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'codesista-event-block-style',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	wp_register_style(
		'codesista-event-block-editor-style',
		plugins_url( 'editor.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	register_block_type( 'codesista/event-block', array(
		'style' => 'codesista-event-block-style',
		'editor_style'  => 'codesista-event-block-editor-style',
		'editor_script' => 'codesista-event-block-script',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    wp_set_script_translations( 'event-block', 'codesista' );
  }

}
add_action( 'init', 'codesista_register_block' );

/**
 * Adds the event_date key to the array of custom columns
 * @param $columns
 * @return mixed
 */
function codesista_register_event_date_column($columns) {
	$columns['event_dates'] = __('Event Date','codesista');
	return $columns;
}
add_filter('manage_posts_columns', 'codesista_register_event_date_column');

/**
 * Returns the event date column content
 * @param $column_name
 * @param $post_id
 */
function codesista_event_date_column_content($column_name, $post_id) {
	if ( 'event_dates' != $column_name )
		return;

	//Get number of slices from post meta
	$date = get_post_meta($post_id, 'codesista_nice_event_date', true);
	echo empty($date) ? '-' : $date;
}
add_action('manage_posts_custom_column', 'codesista_event_date_column_content', 10, 2);

/**
 * Adds the sortable column key to the list of sortable columns
 * @param $columns
 * @return mixed
 */
function codesista_register_sortable_event_date_column( $columns ) {
	$columns['event_dates'] = 'event_dates';
	return $columns;
}
add_filter( 'manage_edit-post_sortable_columns', 'codesista_register_sortable_event_date_column' );

/**
 * Sorts the event_dates column by a custom meta query
 * @param $query
 */
function codesista_event_date_column_sort( $query ) {
	if( ! is_admin() )
		return;

	$order = $query->get( 'orderby');

	if( 'event_dates' == $order ) {
		$query->set( 'meta_query', array(
			'relation' => 'OR',
			array(
				'key' => 'codesista_event_date',
				'compare' => 'EXISTS'
			),
			array(
				'key' => 'codesista_event_date',
				'compare' => 'NOT EXISTS'
			)
		) );
		$query->set('orderby','meta_value_num');
	}
}
add_action( 'pre_get_posts', 'codesista_event_date_column_sort' );
