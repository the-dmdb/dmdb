var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('displayMovie', { title: 'Movie' });
});

module.exports = router;
