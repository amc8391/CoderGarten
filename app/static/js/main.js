$(document).ready(function () {
	var uType = getParameterByName('type');
	switch(uType){
		case "student":
			$('#student-nav').removeClass('student-nav');
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
});

function goToLink(link) {
    window.location.href = link;
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
