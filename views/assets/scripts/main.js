$(document).ready(function() {
  $('#signIn').on('submit', function(){

      var user = $('form input.userL');
      var pass = $('form input.passL');
      var data = {username: user.val(), password: pass.val()};

      $.ajax({
        type: 'POST',
        url: '/log',
        data: data,
        success: function(data){
          //do something with the data via front-end framework
          //location.reload();
          $(document).ready(function() {
            user.val('');
            pass.val('');
            
            location.href = 'http://127.0.0.1:3535/home/' + data.username;
          });
          
        }
      });

      return false;
  });
  
  $('#createAcc').on('submit', function(){

      var user = $('form input.userR');
      var pass = $('form input.passR');
      var data = {username: user.val(), password: pass.val()};

      $.ajax({
        type: 'POST',
        url: '/reg',
        data: data,
        success: function(data){
          //do something with the data via front-end framework
          //location.reload();
          $(document).ready(function() {
            user.val('');
            pass.val('');
            $('#msg').html(`Registered as <b>${data.username}</b><br>Hello there`);
            $('.err').css('visibility', 'visible');
            setTimeout(function() {
              $('.err').css('visibility', 'hidden');
              location.href = 'http://127.0.0.1:3535/home/' + data.username;
            }, 3000);
          });
          
        }
      });

      return false;

  });

});