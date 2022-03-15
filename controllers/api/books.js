const Book = require('../../models/book');
var fetch = require("node-fetch");
const book = require('../../models/bookSchema');
const API_KEY = process.env.API_KEY;

module.exports = {
  search,
  addBook,
  index,
  getListings,
  updateListings,
  deleteListings
}

async function deleteListings(req, res) {
  const books = await Book.findByIdAndDelete(req.body.id);
  res.json(books);
}

async function updateListings(req, res) {
  const book = await Book.findByIdAndUpdate(req.body.id, req.body.book, { new: true });
  res.json(book);
}

async function getListings(req, res) {
  const books = await Book.find({ user: req.user._id }).exec();
  res.json(books);
}


async function index(req, res) {
  const books = await Book.find({}).exec();
  res.json(books);
}

async function addBook(req, res) {
  try {
    req.body.user = req.user._id;
    const book = await Book.create(req.body.volumeInfo);
    res.json(book);

  } catch (err) {
    res.status(400).json(err);
  }
}

async function search(req, res) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${req.body.query}&printType=books&key=${API_KEY}`
  )
    .then(res => {
      if (res.ok) return res.json()
      throw new Error('bad call')
    })
    .then(books => {
      res.json(books)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};






