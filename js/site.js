$('html').removeClass('nojs').addClass('js');

    var name = $('#name').val();
    var valid_name = true;

    var email = $('#email').val();
    var valid_email = /.+@.+/;

    var phone = $('#phone').val();
    var valid_phone = /\d{3}.+\d{3}.+\d{4}/;

    if(name == '' || name == null) {
      console.log('invalid name');
      $(this).remove();
      $('label [for="name"]').append('<p class="invalid"> *Ops, not quite. Please enter a first AND last name*</p>');
      return false;
    }

    else if(!valid_email.test(email)) {
      console.log('invalid email');
      $(this).remove();
      $('label [for="email"]').append('<p class="invalid"> *Ops, not quite. Please enter a valid email address (you@example.com)*</p>');
      return false;
    }

    else if(!valid_phone.test(phone)) {
      console.log('invalid phone');
      $(this).remove();
      $('label [for="phone"]').append('<p class="invalid"> *Ops, not quite. Please enter a phone number in the following format (###-###-####)*</p>');
      return false;
    }

    else {
      console.log($('#name').val(), $('#email').val(), $('#phone').val());
      $(this).remove();
      $('#content').append('<p class="valid"> Thank you ' + name +' , you have been added to our mailing list! </p>');
    }

  };
