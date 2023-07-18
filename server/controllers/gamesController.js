const Game = require("../models/gameModel");
const { isValidId, resourceNotFound } = require('../middleware/errorHandlers');
const { successHandler } = require('../middleware/successHandler');

exports.getAllGames = async (req, res,next) => {
  try {
    const games = await Game.find();
    successHandler(res, 200, games);
  } catch (error) {
    next(error);
  }
};

exports.getGameById = async (req, res, next) => {
  
  try {
    isValidId(req);
    const game = await Game.findById(req.params.id);
    resourceNotFound(game, 'game', 'get');
    successHandler(res, 200, game);
  } catch (error) {
    next(error);
  }
};
