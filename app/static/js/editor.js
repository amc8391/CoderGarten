//http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars;
}
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}


function outf(text) { 
    var mypre = document.getElementById("editor_output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() { 
   var prog = document.getElementById("editor_input").value; 
   var mypre = document.getElementById("editor_output"); 
   mypre.innerHTML = ''; 
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead}); 
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
       console.log(err.toString());
   });
} 

function startEditor() {
    myTextarea = document.getElementById("editor_input");
    var editor = CodeMirror.fromTextArea(myTextarea, {
        lineNumbers: true,
        mode: 'python'
    });
}

$(document).ready(function() {
    var userType = getUrlVars()["type"];
    console.log(userType);
    console.log("loaded it!");
    startEditor();

    // var userClass = {'.student', '.teacher', '.parent'};
    // if (userType === "student") {
    // } else if (userType === "teacher") {

    // } else if (userType === "parent") {

    // }
});
// if userType ==
