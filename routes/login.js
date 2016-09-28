var express = require('express');
var router = express.Router();

//login页面
router.get('/',function(req,res,next){
  res.render('login',{title:"请登录"})
});

module.exports = router;
