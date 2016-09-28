$('#login').click(function(){
  var u = $('#user').val();
  var p = $('#pwd').val();

    if( u === '' ){
      $('#tip_u').css('opacity','1')
    }else  if( p === '' ){
      $('#tip_p').css('opacity','1')
    }else{
        $('#tip_u').css('opacity','0')
          $('#tip_p').css('opacity','0')
          console.log(u+p)
    }

})
