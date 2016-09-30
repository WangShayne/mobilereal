$("#quit").click(function(){
  $.ajax({
    type:"GET",
    url:"/logout",
  }).success(function(data){
    console.log(data)
    window.location.pathname = "/login";
  })
})

$('#userlist').click(function(){
    window.location.pathname = "/userlist";
})

$('#adduser').click(function(){
    window.location.pathname = "/adduser";
})
