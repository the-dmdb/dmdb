var dotenv = require('dotenv')
dotenv.load()

var mdb = require('moviedb')(process.env.TMDB_KEY)

mdb.searchMovie({query: 'Alien' }, function(err, res){
  if (err) throw error
  else {
    console.log("Title is:", res.results[0].title)
    console.log("Rating is:", res.results[0].vote_average)
    console.log("Synopsis is:", res.results[0].overview)
    console.log("Release date:", res.results[0].release_date)
  }
})
