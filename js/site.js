(function($){
  $('#contact-form').on('submit', function(e) {
    if(!valid_email($('#email').val())) {
      $('label[for="email"]').text("*A valid email address includes an '@'; (john@smith.com)*").addClass('warn');
    }
    else if(!valid_phone($('#phone').val())) {
      $('label[for="phone"]').text('*A valid phone number has 10-digits; (800-000-0000)*').addClass('warn');
    }
    else {
      console.log($('#email').val(), $('#phone').val());
      $(this).remove();
      $('#content').append("<p class='success'>Thank You for taking the time to join our contact list! We will be keeping in touch about everything 'Net Neutrality'.</p>");
    }
    e.preventDefault();
  });

  function valid_email(email) {
    var result = false;

    if (email.length > 0) {
      if ((/^[^\s@]+@[^\s@]+$/).test(email)) {
        result = true;
      }
    }

    return result;
  }

  function valid_phone(phone) {
    var result = false;
    var cleaned;

    if (phone.length > 0) {
      cleaned = phone.match(/\d+/g).join('');
      if(cleaned.length >= 10) {
        result = true;
      }
    }

    return result;
  }
})(jQuery);
