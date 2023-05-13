const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    watched: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Movie', MovieSchema)