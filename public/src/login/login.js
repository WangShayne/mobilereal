//检查账号输入

//未输入账号密码时候,登录按钮禁止点击


//判断中文
function isChinese(str) {
    if (/.*[\u4e00-\u9fa5]+.*$/.test(str)) {
        return true;
    }
    return false;
}

//判断账号输入
$('#user').bind('blur', function() {
    $('#tip_u1').css("display", "none");
    $('#tip_u2').css("display", "none");
    $('#tip_u2').html("请输入您的账号!")
    var val = $(this).val();
    if (val === '') {
        $('#tip_u2').css("display", "inline-block");
    } else if (isChinese(val)) {
        $('#tip_u2').html("不能包含中文")
        $('#tip_u2').css("display", "inline-block");
    }
})
//判断密码输入
$('#pwd').bind('blur', function() {
    $('#tip_p2').css("display", "none");
    var val = $(this).val();
    if( val === ''){
      $('#tip_p2').css("display", "inline-block");
      $('#tip_p2').html("请输入您的密码!");
    }

})

//提交账号密码信息
$('#login').click(function() {
$(this).prop('disabled',true)
   var u = $('#user').val();
   var p = $('#pwd').val();
    $.ajax({
        type: "POST",
        url: "/login",
        data: {
            name: u,
            password: p
        },
        success: function(data) {
          console.log(data)
            $('#login').removeProp('disabled');
            if(data.error === 1){
              $('#tip_u2').html(data.msg)
              $('#tip_u2').css('display','inline-block')
            }
            if (data.error === 2){
              $('#tip_p2').html(data.msg)
              $('#tip_p2').css('display','inline-block')
            }
            if(data.error === 0){
              window.location.pathname = "/home";
            }
        }
    })
})
