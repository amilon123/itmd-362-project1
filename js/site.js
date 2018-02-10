$('#contact-form').on('submit',
  function(e)) {

    var name = $('#name').val();
    var valid_name = true;

    var email = $('#email').val();
    var valid_email = /.+@.+/;

    var phone = $('#phone').val();
    var valid_phone = /\d{3}.+\d{3}.+\d{4}/;



  };
