var express = require('express');
var router = express.Router();
var booksCtrl = require('../../controllers/api/books');

router.post('/search', booksCtrl.search);
router.post('/add', booksCtrl.addBook);

module.exports = router;