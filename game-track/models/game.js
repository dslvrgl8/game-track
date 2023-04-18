const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
    title: String,
    rating: String
})

const Game = mongoose.model('Game', gamesSchema, "games")

module.exports = {Game}