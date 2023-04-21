const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
    title: String,
    rating: String,
    image: String,
    played: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const Game = mongoose.model('Game', gamesSchema, "games")

module.exports = {Game}