var express = require('express');
var router = express.Router();
var booksCtrl = require('../controllers/books');

// router.get('/', bookmarksCtrl.index);
// router.get('/new', bookmarksCtrl.new);
// router.get('/:id', bookmarksCtrl.show);
router.post('/search', bookmarksCtrl.create);
// router.get('/:id/edit', bookmarksCtrl.edit);
// router.put('/:id', bookmarksCtrl.update);
// router.delete('/:id', bookmarksCtrl.delete);

module.exports = router;