const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const {Game} = require('../models/game')







//==============ROUTES============================

// New
router.get('/new', (req, res) => {
    res.render('games/new.ejs')
});

router.get('/:id/edit', async (req, res) => {
    const game = await Game.findById(req.params.id)
    res.render('games/edit.ejs', {game})
});

// Index
router.get('/', async (req, res) => {
    const games = await Game.find({})
    res.render('games/index.ejs', {games})
});

// //Seed
// router.get('/seed', async (req, res) => {
// 	await Game.deleteMany({});
// 	await Game.create(startGames);
// 	res.redirect('/games');
// });

// show
router.get('/:id', async (req, res) =>{
    const game = await Game.findById(req.params.id)
    res.render('games/show.ejs', {game})
})

// Delete
router.delete('/:id', async (req, res) => {
	const game = await Game.findByIdAndDelete(req.params.id);
	res.redirect('/games');
})

// Update/edit
router.put('/:id', async (req, res) => {
	const id = req.params.id;
	req.body.played = req.body.played === 'on' ? true : false;
	const game = await Game.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	res.redirect(`/games/${req.params.id}`);
});


router.post('/', (req, res) => {
    console.log(req.body)
    Game.create(req.body)
    .then(createdGame => {
        console.log(createdGame)
        res.redirect('/games')
    })
});



module.exports = router;