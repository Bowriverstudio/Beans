console.log("TEST");

( function( $ ){

	$('.beans_onboard_childtheme').click( function(){

		console.log(beans_globals.ajax_url);
		// TODO = Disnel - Update event.preventDefault to latest standard.
		event.preventDefault();
		$.ajax({
			type : 'post',
			dataType : 'json',
			url : beans_globals.ajax_url,
			data : {
				action: 'beans_onboard_childtheme',
				_ajax_nonce: beans_globals.nonce
			},
			success: function( response ) {
				// console.log(response);
				if( 'success' == response.type ) {

					$('.beans_admin_notice').removeClass('hidden');
					$('.beans_admin_notice').addClass('notice notice-success is-dismissible');
					$('.beans_admin_notice_content').html(response.content);
				}
				else {
					// TODO = Disnel - Handle errors. remove log.
					console.log(response);
				}
			}
		})

	} );

} )( jQuery );
