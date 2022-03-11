const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const booksCtrl = require('../../controllers/api/books');

router.use(ensureLoggedIn);

router.post('/search', booksCtrl.search);
router.post('/add', booksCtrl.addBook);
router.get('/', booksCtrl.index);
router.post('/', booksCtrl.getListings);
router.put('/:id', booksCtrl.edit);

module.exports = router;