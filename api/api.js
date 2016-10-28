var dotenv = require('dotenv')
dotenv.load()

var mdb = require('moviedb')(process.env.TMDB_KEY)

module.exports = movieData

function movieData (searchTerm, callback) {
  mdb.searchMovie({query: searchTerm }, function(err, res){
    if (err) throw error
    else {
      // console.log(Object.keys(res.results[0]));

      var image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${res.results[0].poster_path}`
      var backdrop = `https://image.tmdb.org/t/p/original${res.results[0].backdrop_path}`
      var title = res.results[0].title
      var rating = res.results[0].vote_average
      var synopsis = res.results[0].overview
      var release_date = res.results[0].release_date
      var movieObject = {
        title,
        rating,
        synopsis,
        release_date,
        image,
        backdrop
      }
      callback(null, movieObject)
    }
  })
}
//
// movieData("Alien", function(err, res) {
//   console.log(res)
// })
//
// movieData("The Fifth Element", function(err, res) {
//   console.log(res)
// })
