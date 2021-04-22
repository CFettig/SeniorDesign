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

//runs asr for speaking activity
var asr = new webkitSpeechRecognition();
//will continue to record even when speaker pauses
asr.continuous = false;

var word1 = ''
var word2 = ''

function listen(id) {
  document.getElementById('mic-toggle' + id).innerHTML = 'Stop mic'
  word1 = id;
  asr.start();
}

asr.onresult = function(event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      console.log(word1)
      console.log(word2)
      word2 = event.results[i][0].transcript

      let res = get_result(word1, word2)
        .then((data) => {
          if (data['result']) {
            document.getElementById(word1 + 'incorrect').style.display = 'none'
            document.getElementById(word1 + 'correct').style.display = 'block'
          }
          else {
              document.getElementById(word1 + 'correct').style.display = 'none'
              document.getElementById(word1 + 'incorrect').style.display = 'block'
            } 
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  document.getElementById('mic-toggle' + word1).innerHTML = 'Start mic'
  asr.stop()
}

//gets phonetic representation of user's word to compare to answer
function get_result(word1, word2) {
  return new Promise((resolve, reject) => {
   $.ajax({
      data: {
        "word1": word1,
        "word2": word2,
      },
      type: 'POST',
      url: '/same_sounds',
    success: function(data) {
      resolve(data);
    },
    error: function(error) {
      reject(error)
    },
  })
})
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