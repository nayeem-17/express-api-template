var express = require('express');
const { helloWorld, createUser } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', helloWorld);
router.post('/create', createUser);

module.exports = router;
