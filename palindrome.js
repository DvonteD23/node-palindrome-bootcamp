const express = require('express');
const router = express.Router();
const { checkPalindrome } = require('../controllers/palindromeController');

router.post('/', checkPalindrome);

module.exports = router;
