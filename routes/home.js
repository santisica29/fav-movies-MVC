const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getMovies)

module.exports = router