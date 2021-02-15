//checking on same-different activity
function min_pair_check(user, actual, id) {

  var correct_label = document.getElementById(id+'correct')
  var incorrect_label = document.getElementById(id+'incorrect')

    if (user==actual) {
      if (incorrect_label.style.display = 'block') {
        incorrect_label.style.display = 'none'
      }

      console.log('correct')
      correct_label.style.display = 'block'
      
    }

    else {
      if (correct_label.style.display = 'block') {
        correct_label.style.display = 'none'
      }

      incorrect_label.style.display = "block"

      console.log("incorrect")
    }
  }


var asr = new webkitSpeechRecognition();

//will continue to record even when speaker pauses
asr.continuous = true;

function listen(id) {
    word = document.getElementById(id);
    asr.start();
  }

asr.onresult = function(event) {
  for (var i = event.resultIndex; i < e; i++) {
    if (event.results[i].isFinal) {
        transcript += event.results[i][0].transcript;
      }
  }
}