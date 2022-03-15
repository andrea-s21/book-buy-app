const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const booksCtrl = require('../../controllers/api/books');

router.use(ensureLoggedIn);

router.post('/search', booksCtrl.search);
router.post('/add', booksCtrl.addBook);
router.get('/', booksCtrl.index);
router.get('/listings', booksCtrl.getListings);
router.put('/edit', booksCtrl.updateListings);
router.delete('/delete', booksCtrl.deleteListings);

module.exports = router;