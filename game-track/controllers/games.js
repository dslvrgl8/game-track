const express = require('express');
const router = express.Router();
const startGames = require('../db/gamesSeedData.js')
const Game = require('../models/game.js')