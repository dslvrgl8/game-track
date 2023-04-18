const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const {Game} = require('../models/game')







//==============ROUTES============================



router.get('/', (req, res) => {
    res.render('games/index.ejs')
})

// app.post('/games/search', (req, res) => {
//     // res.render('games/index.ejs')
//     const searchTerm = req.body.searchBar
//     console.log(`https://api.rawg.io/api/games/?key=${API_KEY}&search=${encodeURIComponent(searchTerm)}`)
//        fetch(`https://api.rawg.io/api/games/?key=65295476a4e840ff9fa04447f3cd7fd8&search=${encodeURIComponent(searchTerm)}`)
//        .then((apiResponse) => {
//         // apiResponse.json()
//         console.log(apiResponse)
//     })
//        .then(result => res.render('games/played.ejs', {result}))
//     console.log(searchTerm)
//     })

// app.post("`games/${playedValue}`", (req, res) => {
//     req.body.playedValue = req.body.playedValue === 'on' ? true : false;
//     const game = Game.create(req.body)
//     res.redirect("`games/${playedValue}`")
// })

// app.get('/games/played', (req, res) => {
//     res.render('games/played.ejs')
// });  


router.get('/new', (req, res) => {
    res.render('games/new.ejs')
});

router.post('/', (req, res) => {
    console.log(req.body)
    Game.create(req.body)
    .then(createdGame => {
        console.log(createdGame)
        res.redirect('/games')
    })
});

router.get('/edit', (req, res) => {
    res.render('games/edit.ejs')
    res.redirect('/games/')
});

module.exports = router;