var CURRENT_EDITOR;

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}


function outf(text) { 

    $( ".output" ).each(function(){this.innerHTML = this.innerHTML + text});

    // var mypre = document.getElementById("output"); 
    // mypre.innerHTML = mypre.innerHTML + text; 
} 

function displayAttack(){
  var attack_imgs = [
    "https://media.giphy.com/media/3o85xwgtcuADKQ8QxO/giphy.gif",
    "https://i.kinja-img.com/gawker-media/image/upload/jcc53xkcdkbezhceppdr.gif",
    "https://media.giphy.com/media/arbHBoiUWUgmc/giphy.gif"
  ]
  $( ".bossimg" ).each(function(){
    this.src = attack_imgs[getRandomIntInclusive(0, attack_imgs.length-1)];
  });
  $( ".progress-bar" ).each(function(){
    $(this).css('width', '33%');
    this.innerText = '33%';
  });
}

function displayBoss(){
  $( ".bossimg" ).each(function(){
     this.src = "http://vignette2.wikia.nocookie.net/onepunchman/images/6/64/Vaccine_Man.png/revision/latest?cb=20121129002142";
  });
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function recalcGrade(elemclass){
  var gradingTotal = 0;
  $( ":checkbox:visible").each(function(){
    if(this.checked){
      gradingTotal += parseInt(this.value);
    }
  });
  console.log(gradingTotal);
  $("."+elemclass).each(function(){
    this.innerText = "Total: " + gradingTotal + "/50pt";
  })
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() { 
   displayAttack();

   var prog = CURRENT_EDITOR.getValue();
   //var mypre = document.getElementById("output");
   $( ".output" ).each(function(){this.innerHTML = ""});
   //mypre.innerHTML = ''; 
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
       $( ".output" ).each(function(){this.innerHTML = err.toString()});
       //mypre.innerHTML = err.toString();
   });

    //displayBoss().slideUp(300).delay(300);
} 

function startEditor() {
    $( ".yourcode" ).each(function(){
      if($(this).is(":visible")){
        CURRENT_EDITOR = CodeMirror.fromTextArea(this), {
          lineNumbers: true,
          mode: 'python',
        }
      }
      // else{
      //   var throwaway = CodeMirror.fromTextArea(this), {
      //     lineNumbers: true,
      //     mode: 'python'
      //   }
      // }
    });
    // myTextarea = document.getElementById("yourcode");
    // CURRENT_EDITOR = CodeMirror.fromTextArea(myTextarea, {
    //     lineNumbers: true,
    //     mode: 'python'
    // });

}

$(document).ready(function() {
    /* decide which editor to show */
    var uType = sessionStorage.getItem("uType");
    switch(uType){
      case "student":
        $('#student-editor').removeClass('student-editor');
        $('#teacher-editor').remove();
        $('#parent-editor').remove();
        break;

      case "teacher":
        $('#teacher-editor').removeClass('teacher-editor');
        $('#student-editor').remove();
        $('#parent-editor').remove();
        break;

      case "parent":
        $('#parent-editor').removeClass('parent-editor');
        $('#teacher-editor').remove();
        $('#student-editor').remove();
        break;
      case "default":
        break;
    }

    //console.log(userType);
    console.log("loaded it!");
    startEditor();
    recalcGrade('grading-total');
    displayBoss();
});
// if userType ==
