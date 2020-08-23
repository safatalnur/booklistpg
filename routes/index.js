var express = require('express');
var router = express.Router();
const bookController = require('../controller/index') 

/* GET home page. */
router.get('/', bookController.index);

module.exports = router;
