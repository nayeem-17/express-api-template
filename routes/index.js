var express = require('express');
const { helloWorld, getManager } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', helloWorld);
router.get('/get/:id', getManager);

module.exports = router;
