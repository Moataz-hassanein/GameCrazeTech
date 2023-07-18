const Pc = require('../models/pcModel');
const { isValidId, resourceNotFound } = require('../middleware/errorHandlers');
const { successHandler } = require('../middleware/successHandler');


exports.getAllPcs = async (req, res, next) => {
  try {
    const pcs = await Pc.find();
    successHandler(res, 200, pcs)
  } catch (error) {
    next(error);
  }
};

exports.getPcById = async (req, res, next) => {
  try {
    isValidId(req);
    const pc = await Pc.findById(req.params.id);
    resourceNotFound(pc, 'pc', 'get');
    successHandler(res, 200, pc);
  } catch (error) {
    next(error);
  }
};
