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

  if(!pattern.email.test(inputs.email)) {
    console.log('Invalid Email');
    $('.invalid').remove();
    $('.input-email').append('<p class="invalid"> *A valid email address; (e.g., you@example.com)*</p>');
  }
  else {
    console.log('Valid Email');
    validator.email = true;
  }

  if(!pattern.phone.test(inputs.phone)) {
    console.log('Invalid Phone');
    $('.invalid').remove();
    $('.input-phone').append('<p class="invalid"> *A valid phone number; (###-###-####)*</p>');
  }
  else {
    console.log('Valid Phone');
    validator.phone = true;
  }

  if(validator.email === true && validator.phone === 'undefined') {
    console.log('Only email!');
    $(this).remove();
    $('#project').remove();
    $('#project').append("<h1>Let's save the net!</h1>");
    $('.user-form').remove('#email');
    $('#email').append("<p>Thank You for taking the time to join our mailing list! We will be keeping in touch about everything 'Net Neutrality'.</p");
  }

  if(validator.phone === true && validator.email === 'undefined') {
    console.log("Only phone");
    $('#project').remove();
    $('#project').append("<h1>Let's save the net!</h1>");
    $('.user-form').remove('#phone');
    $('#phone').append("<li>Thank You for taking the time to join our text-notifcations! We will be keeping in touch about everything 'Net Neutrality'.</li");
  }

  e.preventDefault();
});
