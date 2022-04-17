var express = require('express');
var router = express.Router();
let path = require('path')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"temp":["d1", "d2", "d3", "d4..."]})
});

router.get('/test', function(req, res, next) {
    res.sendFile("/Users/ken/Documents/Project2022/client/iot_dashboard/build/index.html");
})
module.exports = router;