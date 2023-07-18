const express = require('express');

const router = express.Router();

const {getAllGames, getGameById, } = require('../controllers/gamesController');

router.route('/').get(getAllGames);

router.route('/:id').get(getGameById);

module.exports = router;
 