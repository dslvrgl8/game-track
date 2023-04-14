// Dependencies
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();
require('dotenv').config();

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static(__dirname + '/public'));
app.use(express.json())
const searchResultState = {}

app.get('/games', (req, res) => {
    res.render('games/index.ejs')
})

app.post('/games/search', (req, res) => {
    // res.render('games/index.ejs')
    const searchTerm = req.body.searchBar
    console.log(`https://api.rawg.io/api/games/?key=${process.env.API_KEY}&search=${encodeURIComponent(searchTerm)}`)
       fetch(`https://api.rawg.io/api/games/?key=65295476a4e840ff9fa04447f3cd7fd8&search=${encodeURIComponent(searchTerm)}`)
       .then((apiResponse) => {
        // apiResponse.json()
        console.log(apiResponse)
    })
       .then(result => res.render('games/index.ejs', {result}))
    console.log(searchTerm)
    })

app.get('/games/played', (req, res) => {
    res.render('games/played.ejs')
});  

app.get('/games/unplayed', (req, res) => {
    res.render('games/unplayed.ejs')
});   

app.get('/games/new', (req, res) => {
    res.render('games/new.ejs')
});

app.get('/games/edit', (req, res) => {
    res.render('games/edit.ejs')
    res.redirect('/games/')
});
// const gamesController = require('./controllers/games');
// app.use('/games', gamesController);

// Listener
app.listen(process.env.PORT, () => {
	console.log(`express is listening on port: ${process.env.PORT}`)
})