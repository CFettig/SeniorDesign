//js for asr listener
var asr = new webkitSpeechRecognition();

//will continue to record even when speaker pauses
asr.continuous = true;
//will show interim words as speaker talks
asr.interimResults = true;


function start_recording() {
  //toggles mic button to stop
  mic = document.getElementById('mic-toggle');
  mic.setAttribute('onclick', 'stop_recording()');
  mic.innerHTML = "Stop";

  asr.start();
}

function stop_recording() {
  //toggles mic button to start
  mic = document.getElementById('mic-toggle');
  mic.setAttribute('onclick', 'start_recording()');
  mic.innerHTML = "Record";

  asr.stop();
}

asr.onresult = function(event) {
  display_text = document.getElementById('display-text');
  interim_text = document.getElementById('interim-text');
  var transcript = '';
  var interim = '';
  
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      //adds string to the span for final text
      transcript += event.results[i][0].transcript;
    } 
    else {
      //adds string to the span for changing text
      interim += event.results[i][0].transcript;
    }
  }
  display_text.innerHTML += transcript;
  interim_text.innerHTML = interim;
}

//custom context menu for selecting similar words
var clickArea = document.getElementById('display-text')
// console.log("clicked " + clickArea)
clickArea.oncontextmenu = rightClick


function rightClick(e) {
  e.preventDefault();

  context = document.getElementById('context-menu')

  if (context.style.display == "block") {
    document.getElementById('user-selection').innerHTML = ""
    context.style.display = "none"
  }
  else {
    var select = window.getSelection().toString();
    document.getElementById('user-selection').innerHTML = "Wrong word: " + select

    context.style.display = "block"
    context.style.left = e.pageX + "px"; 
    context.style.top = e.pageY + "px"; 
  }
}
