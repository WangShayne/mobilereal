//数据库连接池
var query = require('../dao/query.js');

//检查登录
function checkLogin(req,res,next){
  if(!req.session.user){
    console.log("未登录");
    res.redirect('/login');
  }
  next();
}

function checkNotLogin(req,res,next){
  if(req.session.user){
    console.log("已登录")
    res.redirect('/home');
  }
  next();
}

//路由套路
module.exports = function(app) {

    app.get('/',checkLogin);
    app.get('/',checkNotLogin);


    app.get('/login',checkNotLogin)
    app.get('/login', function(req, res) {
        res.render('login', {
            title: "请登录"
        })
    })

    app.post('/login',checkNotLogin);
    app.post('/login', function(req, res) {
        var name = req.body.name;
        var pwd = req.body.password;
        query("select * from users where name='" + name + "'LIMIT 1", function(err, rows, fields) {
            if (err) throw err;
            console.log(rows)
            console.log(rows.length)
            if (rows.length === 0) {
                //返回错误信息
                res.send({
                    error: 1,
                    msg: '没有这个用户'
                });
            } else {
                //验证账号密码 正确跳转 错误返回错误信息
                if (rows[0].password !== pwd) {
                    res.send({
                        error: 2,
                        msg: '密码错误'
                    })
                } else {
                    req.session.user = rows[0].name;
                    res.send({
                      error:0,
                      msg:"登录成功"
                    })
                }
            }
        })
    })

    app.get('/home',checkLogin);
    app.get('/home',function(req,res){
      console.log(req.session)
      res.render('home',{title:"主页"})
    })
}
