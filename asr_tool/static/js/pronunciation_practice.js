//checking on same-different activity
function min_pair_check(user, actual) {
    if (user==actual) {
      console.log("correct")
    }
    else {
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