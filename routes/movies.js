const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies')

router.get('/', moviesController.getMovies)

router.post('/addMovie', moviesController.addMovie)

router.put('/upvoteMovie', moviesController.upvoteMovie)

router.put('/downvoteMovie', moviesController.downvoteMovie)

router.put('/watchedMovie', moviesController.watchedMovie)

router.put('/notWatchedMovie', moviesController.notWatchedMovie)

router.delete('/deleteMovie', moviesController.deleteMovie)

module.exports = router