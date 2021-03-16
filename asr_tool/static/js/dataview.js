function display_data(user) {
     var transcript_div = document.getElementById('user' + user);
     console.log(transcript_div.getAttribute('style'))

     if (transcript_div.getAttribute('style') == 'display:none;') {
        transcript_div.setAttribute('style', 'display:block;')
     }
     else {
        transcript_div.setAttribute('style', 'display:none;')
     }
}
