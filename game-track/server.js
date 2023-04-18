// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const { DATABASE_URL, PORT, API_KEY } = require('./config');
const gamesRouter = require('./routers/gamesRouter')
const app = express();

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static(__dirname + '/public'));
app.use(express.json())


// const gamesController = require('./controllers/games');
app.use('/games', gamesRouter);

//------------------------------------------
mongoose.connect(DATABASE_URL).then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`);
    });
  });
  
  //now we have mongoose calling the app.listen to boot up the server, but ALSO he is connecting us to the DATABASE