$('html').removeClass('nojs').addClass('js');

$('.user_form li').on('click', function() {
  $(this).find('user_form').focus();
});

$('#email').on('keyup', function() {
  var email = {
    val: $(this).val(),
    pat: /.+@.+/
  }
  if((email.pat).test(email.val)) {
    console.log('working');
  }
  else {
    console.log('invalid email');
    $(this).remove();
    $('label [for="email"]').append('<p class="invalid"> *A valid email address; (e.g., you@example.com)*</p>');
  }
});

$('#phone').on('keyup', function() {
  var phone = {
    val: $(this).val(),
    pat: /\d{3}.+\d{3}.+\d{4}/
  }
  if((phone.pat).test(email.val)) {
    console.log('working');
    /*$('input[type="submit"]').addClass('show');*/
  }
  else {
    console.log('invalid email');
    $(this).remove();
    $('label [for="phone"]').append('<p class="invalid"> *A valid phone number; (###-###-####)*</p>');
  }
});
