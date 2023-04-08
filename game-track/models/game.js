const { mongoose } = require('../db/connection');

const gamesSchema = new mongoose.Schema({
    gameName: String,
    Completed: Boolean,
    Finished: Boolean,
    Rating: Number
})

const fame = mongoose.model('Game', gamesSchema)