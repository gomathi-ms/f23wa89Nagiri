var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  more+=1
  sum+=more
  res.send(`Sum is: ${sum}`)
});

module.exports = router;
let sum=0
let more=0
