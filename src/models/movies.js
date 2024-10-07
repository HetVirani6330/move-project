const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: String,
    director: String,
    stars: String,
    date: Number
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie