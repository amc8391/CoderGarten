function logout(){
	$.ajax({
			url: "/login",
			success: function(){
            document.location = "/login";  // redirect browser to link
        }
		});
	sessionStorage.clear();
}

function goToLink(link) {
    window.location.href = link;
}

function toggleDisplay(id) {
	if ($(id).css('display') == 'none') {
		$(id).css('display', 'block');
	} else {
		$(id).css('display', 'none');
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function () {
	/* decide which navbar to show */
	var uType = sessionStorage.getItem("uType");
	switch(uType){
		case "student":
			$('#student-nav').removeClass('student-nav');
			//$('#student-nav').css("display", "block");
			break;

		case "teacher":
			$('#teacher-nav').removeClass('teacher-nav');
			break;

		case "parent":
			$('#parent-nav').removeClass('parent-nav');
			break;
		case "default":
			break;
	}

	$('.logout').click(function(){
		logout();
	});
});