var express = require('express')
var router = express.Router();
var movieData = require('../api/api')


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("The movie searched was", req.query.keyword)
  movieData(req.query.keyword, function (err, movieDetails) {
    if (err) throw err
    else {
      res.render('displayMovie', movieDetails )
    }
  })
})

module.exports = router
