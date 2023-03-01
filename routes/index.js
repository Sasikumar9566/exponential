var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', exponential: [], comments: "" });
});
/*POST exponential series number */
router.post('/exponential', function (req, res, next) {
  let arr = [];
  let temp = function (a) {
    if (!arr.length) {
      arr = [0, 1]
    }
    if (a > arr[arr.length - 1] && a > arr[arr.length - 1] + arr[arr.length - 2]) {
      arr = [...arr, arr[arr.length - 1] + arr[arr.length - 2]]
      return temp(a)
    }
    return arr
  }
  res.render('index', { title: 'Express', exponential: temp(req.body.exponential), comments: "The below result is showing less than entered value!" });
});
router.get('/exponential', function (req, res, next) {
  res.render('index', { title: 'Express', exponential: [], comments: "" });
});
module.exports = router;
