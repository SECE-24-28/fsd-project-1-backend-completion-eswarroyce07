const express = require('express');
const { submitContact } = require('../Controllers/ContactController');

const router = express.Router();

router.post('/', submitContact);

module.exports = router;
