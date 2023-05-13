const Movie = require('../models/Movie')

module.exports = {
    getMovies: async (req, res) => {
        try {
            const movieList = await Movie.find().sort({rank: -1})
            const moviesLeft = await Movie.countDocuments({watched: false})
            res.render('movies.ejs', {movies: movieList, watched: moviesLeft})
        } catch (err) {
            console.error(err)
        }
    },
    addMovie: async (req,res) => {
        try {
            await Movie.create({
                name: req.body.movieName, 
                rank: req.body.movieRank, 
                watched: false
            })
            console.log(`Movie has been added!`);
            res.redirect('/movies')
        } catch (err) {
            console.error(err);
        }
    },
    upvoteMovie: async (req,res) => {
        try {
          await Movie.findOneAndUpdate({_id: req.body.movieIdFromJS}, {
            rank: Number(req.body.movieRankFromJS) + 0.5
          })  
          console.log('Upvote Movie');
          res.json('Upvote Movie')
        } catch (err) {
            console.error(err);
        }
    },
    downvoteMovie: async (req,res) => {
        try {
          await Movie.findOneAndUpdate({_id: req.body.movieIdFromJS}, {
            rank: Number(req.body.movieRankFromJS) - 0.5
          })  
          console.log('Downvote Movie');
          res.json('Downvote Movie')
        } catch (err) {
            console.error(err);
        }
    },
    watchedMovie: async (req,res) => {
        try {
          await Movie.findOneAndUpdate({_id: req.body.movieIdFromJS}, {
            watched: true
          })  
          console.log('Watched Movie');
          res.json('Watched Movie')
        } catch (err) {
            console.error(err);
        }
    },
    notWatchedMovie: async (req,res) => {
        try {
          await Movie.findOneAndUpdate({_id: req.body.movieIdFromJS}, {
            watched: false
          })  
          console.log('marked unWatched Movie');
          res.json('marked unWatched Movie')
        } catch (err) {
            console.error(err);
        }
    },
    deleteMovie: async (req,res) => {
        try {
            await Movie.findOneAndDelete({_id: req.body.movieIdFromJS})
            console.log('Movie Deleted');
            res.json('Movie Deleted')
        } catch (err) {
            console.error(err);
        }
    }
}