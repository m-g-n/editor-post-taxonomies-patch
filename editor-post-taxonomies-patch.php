<?php
/**
 * Plugin Name: editor-post-taxonomies-patch
 * Plugin URI: https://github.com/m-g-n/editor-post-taxonomies-patch
 * Description: Upload Settings
 * Version: 0.0.0
 * Author: m-g-n,HAMWORKS
 * Author URI: https://github.com/m-g-n/editor-post-taxonomies-patch
 * License: GPL2 or later
 * //Requires at least//: 5.8
 * Tested up to: 5.8
 * Requires PHP: 7.3
 */


add_action(
	'enqueue_block_editor_assets',
	function () {
		$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
		wp_enqueue_script(
			'editor-post-taxonomies-patch',
			plugins_url( 'build/index.js', __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version']
		);
	}
);
