const Book = require('../models/book');

module.exports = {
//   index,
//   new: newBookmark,
  create
//   show,
//   update,
//   edit,
//   delete: deleteBookmark
}

// function deleteBookmark(req, res) {
//   Bookmark.findByIdAndDelete(req.params.id, function (err) {
//     res.redirect('/bookmarks');
//   });
// }

// function update(req, res) {
//   Bookmark.findOneAndUpdate(req.params.id,
//     req.body,
//     { new: true },
//     function (err, bookmark) {
//       res.redirect(`/bookmarks/${bookmark._id}`);
//     }
//   );
// }

// function edit(req, res) {
//   Bookmark.findById(req.params.id, function (err, bookmark) {
//     res.render('bookmarks/edit', { bookmark });
//     if (err || !bookmark) return res.redirect('/bookmarks');
//   });
// }

// function show(req, res) {
//   Bookmark.findById(req.params.id, function (err, bookmark) {
//     res.render('bookmarks/show', { bookmark });
//   });
// }

async function create(req, res) {
  req.body.user = req.user._id;
  Book.create(req.body, function (err, book) {
    res.redirect('books/search');
  });
}

// function newBookmark(req, res) {
//   Category.find({}).sort('title').exec(function (err, categories) {
//     res.render('books/search', { categories });
//   });
// }

// // function index(req, res) {
// //   Category.find({}).sort('title').exec(function (err, categories) {
// //     Bookmark.find({})
// //       .populate('user')
// //       .sort('category')
// //       .exec(function (err, bookmarks) {
// //         res.render('bookmarks/index', { bookmarks, categories });
// //       })
// //   })
// }