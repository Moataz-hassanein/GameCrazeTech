const express = require('express');

const router = express.Router();

const {getAllPcs, getPcById, } = require('../controllers/pcsController');

router.route('/').get(getAllPcs);

router.route('/:id').get(getPcById);

module.exports = router;
  