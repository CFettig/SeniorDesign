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
  mic.innerHTML = "Pause";
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
  interim_text = document.getElementById('interim-text');
  var new_text = document.getElementById('new-text');
  var interim = '';
  var transcript = '';
  
  
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
  new_text.textContent += transcript;
  interim_text.innerHTML = interim;
  console.log(JSON.stringify(new_text.textContent))
  send_transcript(transcript)
}

//custom context menu for selecting similar words
var clickArea = document.getElementById('text-display')
clickArea.oncontextmenu = rightClick


function rightClick(e) {
  e.preventDefault();

  context = document.getElementById('context-menu')

  if (context.style.display == "block") {
    document.getElementById('user-selection').innerHTML = ""
    document.getElementById('user-selection').value = ""
    context.style.display = "none"
  }
  else {
    var select = window.getSelection().toString();
    // document.getElementById('user-selection').innerHTML = "I see: " + select
    document.getElementById('user-selection').value = select

    context.style.display = "block"
    context.style.left = e.pageX + "px"; 
    context.style.top = e.pageY + "px"; 
  }
}

//ajax call to save transcription text to database
function send_transcript(transcript) {
  $.ajax({
    data : {
      "transcript": transcript,
    },
    type : 'POST',
    url : '/save_transcript'
  })
  .done(function(data) {
    if (data.error) {
        $('#errorAlert').text(data.error).show();
        $('#successAlert').hide();
    }
    else {
        $('#successAlert').text(data.name).show();
        $('#errorAlert').hide();
    }
});
}

function end_practice() {
  window.location = "/end_practice";
}