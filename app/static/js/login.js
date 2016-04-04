$(document).ready( function () {
	/* show hide elements*/


	$('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
			$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
			$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('#login-submit').click(function(e){
		var username = $('#username').val();
		var password = $('#password').val();
		var valid = false;
		var url = "http://localhost:5000"
		var pString = "?username=" + username + "&password=" + password;

		if(username == 'saitama' && password == 'onepunch'){
			sessionStorage.setItem("uType","student");
			url += "/student-homepage";
			pString += "&type=student";
			valid = true;
		} else if (username == 'one' && password == 'mobpsycho'){
			sessionStorage.setItem("uType","parent");
			url += "/parent-homepage";
			pString += "&type=parent";
			valid = true;
		}
		else if (username == 'murata' && password == 'redraw'){
			sessionStorage.setItem("uType","teacher");
			url += "/teacher-homepage";
			pString += "&type=teacher";
			valid = true;
		} else {
			$('#incorrect-creds').removeClass('login-error');
		}
		if(valid == true){
			window.location.href = url + pString;
		}
		
	});
});