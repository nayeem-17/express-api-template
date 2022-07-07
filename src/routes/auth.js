const express = require('express');
const { getAccessToken } = require('../authentication/authControllers');
const { login } = require('../authentication/authMiddlewares');
const router = express.Router()

router.post('/token', login, getAccessToken);

module.exports = router;