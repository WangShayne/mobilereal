var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
 res.send('123');
})

module.exports = router;
