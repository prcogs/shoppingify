const express = require('express');
const router = express.Router();

const itemController = require('../controller/item');


router.get('/', itemController.getItem)


module.exports = router;