$("#quit").click(function(){
  $.ajax({
    type:"GET",
    url:"/logout",
  }).success(function(data){
    console.log(data)
    window.location.pathname = "/login";
  })
})



$.ajax({
  type:"GET",
  url:"/list"
}).success(function(data){
  $('#example').dataTable( {
    "data": data,
    "columns": [
                { data: 'id' },
                { data: 'name' },
                { data: 'cname' },
                { data: 'phone' }
            ]
  } )
})
