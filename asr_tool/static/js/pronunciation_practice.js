//checking on same-different activity
function min_pair_check(user, actual, id) {

  var correct_label = document.getElementById(id+'correct')
  var incorrect_label = document.getElementById(id+'incorrect')

    if (user==actual) {
      if (incorrect_label.style.display = 'block') {
        incorrect_label.style.display = 'none'
      }

      correct_label.style.display = 'block'
    }

    else {
      if (correct_label.style.display = 'block') {
        correct_label.style.display = 'none'
      }

      incorrect_label.style.display = "block"
    }
  }


var asr = new webkitSpeechRecognition();
//will continue to record even when speaker pauses
asr.continuous = false;

var word = ''

function listen(id) {
  document.getElementById('mic-toggle' + id).innerHTML = 'Stop mic'
  word = id;
  asr.start();
}

asr.onresult = function(event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
        if (event.results[i][0].transcript == word) {
          document.getElementById(word + 'incorrect').style.display = 'none'
          document.getElementById(word + 'correct').style.display = 'block'
        }
        else {
          document.getElementById(word + 'correct').style.display = 'none'
          document.getElementById(word + 'incorrect').style.display = 'block'
        }
    }
  }
  document.getElementById('mic-toggle' + word).innerHTML = 'Start mic'
  asr.stop()
}

function toggle(id) {
  var mediaPlayer = document.getElementById(id);
  if (mediaPlayer.paused) {
      mediaPlayer.play();
      $('.pause-btn').show();
      $('.play-btn').hide();
  } else {
      mediaPlayer.pause();
      $('.play-btn').show();
      $('.pause-btn').hide();
  }
}