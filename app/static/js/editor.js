//http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars;
}

function runCode(element) {

}

$(document).ready(function() {
    var userType = getUrlVars()["type"];
    console.log(userType);
    console.log("loaded it!");

    var userClass = {'.student', '.teacher', '.parent'};
    if (userType === "student") {
    } else if (userType === "teacher") {

    } else if (userType === "parent") {

    }
});
// if userType ==
