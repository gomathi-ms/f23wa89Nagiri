var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  x=Math.random()*10
  y=Math.abs(x)
  res.send(`math abs applied to ${x} is ${y}`)
});

module.exports = router;
let x,y
