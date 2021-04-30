function show_input(id) {
    var context = document.getElementById(id);

    if (context.getAttribute('style') == 'display:none;') {
        context.setAttribute('style', 'display:inline;');
    }
    else {
        context.setAttribute('style', 'display:none;')
    }
}

function send_email(trans_id) {
    var recipient = document.getElementById('recipient-' + trans_id);
    
    $.ajax({
        data: {
          "recipient": recipient.value,
          "trans_id": trans_id
        },
        type: 'POST',
        url: '/email_practice_report'
      })
        .done(function (data) {
          if (data.error) {
            window.alert('')
          }
          else {
            if (data=='failure') {
              window.alert('There was an error sending your report. Make sure you entered a real email')
            }
            else {
              window.alert('Your report has been sent')
            }
          }
        });

    recipient.value = ''
    document.getElementById('send-email-' + trans_id).setAttribute('style', 'display:none;')
}