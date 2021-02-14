var express = require('express');
const { helloWorld } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', helloWorld);

module.exports = router;
