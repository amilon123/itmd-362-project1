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
    $('label [for="email"]').append('<p class="invalid"> *Ops, not quite. Please enter a valid email address (you@example.com)*</p>');
  }
});

  };
