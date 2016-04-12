var CURRENT_EDITOR;



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
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 

function displayAttack(){
  //   <img src="http://vignette2.wikia.nocookie.net/onepunchman/images/6/64/Vaccine_Man.png/revision/latest?cb=20121129002142" height="100px" width="150px">
  // <img src="https://media.giphy.com/media/3o85xwgtcuADKQ8QxO/giphy.gif" height="100px" width="150px">
  // <img src="https://i.kinja-img.com/gawker-media/image/upload/jcc53xkcdkbezhceppdr.gif" height="100px" width="150px">
  // <img src="https://media.giphy.com/media/arbHBoiUWUgmc/giphy.gif" height="100px" width="150px">

  var attack_imgs = [
    "https://media.giphy.com/media/3o85xwgtcuADKQ8QxO/giphy.gif",
    "https://i.kinja-img.com/gawker-media/image/upload/jcc53xkcdkbezhceppdr.gif",
    "https://media.giphy.com/media/arbHBoiUWUgmc/giphy.gif"
  ]
  var boss_img = document.getElementById("bossimg");
  boss_img.src = attack_imgs[getRandomIntInclusive(0, attack_imgs.length-1)];
}

function displayBoss(){
  var boss_img = document.getElementById("bossimg");
  boss_img.src = "http://vignette2.wikia.nocookie.net/onepunchman/images/6/64/Vaccine_Man.png/revision/latest?cb=20121129002142";
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() { 
   displayAttack();

   var prog = CURRENT_EDITOR.getValue(); 
   var mypre = document.getElementById("output"); 
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
       mypre.innerHTML = err.toString();
   });

    displayBoss();
} 

function startEditor() {
    myTextarea = document.getElementById("yourcode");
    CURRENT_EDITOR = CodeMirror.fromTextArea(myTextarea, {
        lineNumbers: true,
        mode: 'python'
    });

    displayBoss();
}

$(document).ready(function() {
    var userType = getUrlVars()["type"];
    console.log(userType);
    console.log("loaded it!");
    startEditor();

    //sessionStorage.getItems('utype')
    var uType = sessionStorage.getItem("uType");
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
    // var userClass = {'.student', '.teacher', '.parent'};
    // if (userType === "student") {
    // } else if (userType === "teacher") {

    // } else if (userType === "parent") {

    // }
});
// if userType ==
