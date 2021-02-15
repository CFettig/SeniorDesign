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
  mic.innerHTML = `Pause ${<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
  </svg>}`;
  asr.start();
}

function stop_recording() {
  //toggles mic button to start
  mic = document.getElementById('mic-toggle');
  mic.setAttribute('onclick', 'start_recording()');
  mic.innerHTML = `Record ${<svg
    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    class="bi bi-mic-fill" viewBox="0 0 16 16">
    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
    <path fill-rule="evenodd"
      d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
  </svg>}`;

  asr.stop();
}

asr.onresult = function (event) {
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
    data: {
      "transcript": transcript,
    },
    type: 'POST',
    url: '/save_transcript'
  })
    .done(function (data) {
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