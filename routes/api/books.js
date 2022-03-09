var express = require('express');
var router = express.Router();
var booksCtrl = require('../../controllers/api/books');

router.post('/search', booksCtrl.search);

module.exports = router;