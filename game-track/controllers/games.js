const express = require('express');
const router = express.Router();
const Game = require('../models/game.js')

router.get('/games', (req, res) => {
 // GET `https://api.rawg.io/api/games?key=${process.environment.API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7
    fetch(`https://api.rawg.io/api/games?search_precise=halo2&key=${process.env.API_KEY}`)
    .then((apiResponse) => apiResponse.json())
    .then(result => res.json(result))
 })
