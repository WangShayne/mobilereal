$("#quit").click(function() {
    $.ajax({
        type: "GET",
        url: "/logout",
    }).success(function(data) {
        console.log(data)
        window.location.pathname = "/login";
    })
})

$("#name").bind('blur', function() {
    var v = $('#name').val();
    if (v === '') {
        $('#add_name').css('opacity', "1");
    } else {
        $('#add_name').css('opacity', "0");
    }
})

$("#cname").bind('blur', function() {
    var v = $('#cname').val();
    if (v === '') {
        $('#add_cname').css('opacity', "1");
    } else {
        $('#add_cname').css('opacity', "0");
    }
})

$("#phone").bind('blur', function() {
    var v = $('#phone').val();
    if (v === '') {
        $('#add_phone').css('opacity', "1");
    } else {
        $('#add_phone').css('opacity', "0");
    }
})

$('#add').click(function(){
  var data = {
    name:$("#name").val(),
    cname:$('#cname').val(),
    phone:$('#phone').val()
  }

 $.ajax({
    type:"POST",
    url:"/adduser",
    data:data
  }).success(function(data){
    console.log(data)
    if(data.error === "0"){

      alert("新增用户成功,用户编号:"+data.msg.insertId);
      window.location.pathname = "/userlist";
    }
  })
})
