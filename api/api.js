var dotenv = require('dotenv')
dotenv.load()

var mdb = require('moviedb')(process.env.TMDB_KEY)

module.exports = movieData

function movieData (searchTerm, callback) {
  mdb.searchMovie({query: searchTerm }, function(err, res){
    if (err) throw error
    else {
      var title = res.results[0].title
      var rating = res.results[0].vote_average
      var synopsis = res.results[0].overview
      var release_date = res.results[0].release_date
      var movieObject = {
        title,
        rating,
        synopsis,
        release_date
      }
      callback(null, movieObject)
    }
  })
}

movieData("Alien", function(err, res) {
  console.log(res);
})

movieData("The Fifth Element", function(err, res) {
  console.log(res);
})
