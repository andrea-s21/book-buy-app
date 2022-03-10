const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const booksCtrl = require('../../controllers/api/books');



router.post('/search', booksCtrl.search);
router.post('/add', booksCtrl.addBook);
router.get('/', booksCtrl.index);
router.get('/listings', ensureLoggedIn, booksCtrl.getUserListings);

module.exports = router;