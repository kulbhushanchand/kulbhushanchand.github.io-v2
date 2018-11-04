$(function(){

	$('.awesome-form .input-group').focusout(function() {
		
		var inputContent = $(this).val();

		if ( inputContent !== '' ) {
			$(this).addClass('has-content');
			console.log('has-content');
		} else {
			$(this).removeClass('has-content');
			console.log('no-content');
		}

	});

});