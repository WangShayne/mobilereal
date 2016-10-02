$("#quit").click(function() {
    $.ajax({
        type: "GET",
        url: "/logout",
    }).success(function(data) {
        console.log(data)
        window.location.pathname = "/login";
    })
})

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.columnDefaults, $.fn.bootstrapTable.locales['zh-CN']);
$('#list').bootstrapTable({
    method: 'get',
    contentType: "application/x-www-form-urlencoded",
    url: '/list',
    columns: [{
        field: 'id',
        title: '用户 ID'
    }, {
        field: 'name',
        title: '用户名'
    }, {
        field: 'cname',
        title: '公司名'
    }, {
        field: 'phone',
        title: '联系电话'
    }, {
        title: "操作",
        field: "id",
        align: 'center',
        formatter: function(value, row, index) {
            var e = '<button type="button" onclick="edit(\'' + row.id + "," + row.name + "," + row.cname + "," + row.phone + '\')">编辑</button> ';
            var d = '<button type="button" onclick="del(\'' + row.id + '\')">删除</button> ';
            return e + d;
        }
    }],
    cache: false,
    sortStable: true,
    pagination: true,
    paginationLoop: true,
    paginationVAlign: "bottom",
    paginationHAlign: "right",
    paginationPreText: "上一页",
    paginationNextText: "下一页",
    checkbox: true,
    sortable: true,
});

function edit(i) {
    var data = i.split(',');
    console.log(data);
    $('#myModal').on("show.bs.modal", function() {
        $('#id').val(data[0]);
        $('#name').val(data[1]);
        $("#cname").val(data[2]);
        $("#phone").val(data[3])
    }).modal("toggle")
}

$('#edit').click(function() {
    var data = {
        id: $('#id').val(),
        name: $('#name').val(),
        cname: $("#cname").val(),
        phone: $("#phone").val()
    }
    $.ajax({
        type: "POST",
        url: "/edit",
        data: data
    }).success(function(msg) {
      alert("修改成功!")
        window.location.reload();
        console.log(msg)
    })
})

function del(id){
  $.ajax({
    type:"POST",
    url:"/del",
    data:{"id":id}
  }).success(function(msg){
      console.log(msg);
      alert("删除成功!")
      window.location.reload();
  })

}
