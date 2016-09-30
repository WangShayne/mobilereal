$("#quit").click(function(){
  $.ajax({
    type:"GET",
    url:"/logout",
  }).success(function(data){
    console.log(data)
    window.location.pathname = "/login";
  })
})
