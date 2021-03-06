(function ($) {
	let doc = $( document );

	doc.ready( function () {
		$( '#fspSaveSettings' ).on( 'click', function () {
			let data = FSPoster.serialize( $( '#fspSettingsForm' ) );

			FSPoster.ajax( 'settings_vk_save', data, function (res) {
				FSPoster.toast( res[ 'msg' ], 'success' );
			} );
		} );

		$( "#fs_vk_load_members_communities" ).trigger( 'change' );
	} );
})( jQuery );