var express = require('express')
var router = express.Router();
var movieData = require('../api/api')


/* GET users listing. */
router.get('/', function(req, res, next) {
  movieData('Monsters Inc', function (err, movieDetails) {
    // function (err, res) {
    if (err) throw err
    else {
      console.log(movieDetails);
      res.render('displayMovie', movieDetails );
    }
    // }
  })
});

module.exports = router;
