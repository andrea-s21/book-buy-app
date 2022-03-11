const Book = require('../../models/book');
var fetch = require("node-fetch");
const book = require('../../models/book');
const API_KEY = process.env.API_KEY;



module.exports = {
  search, 
  addBook,
  index,
  getListings,
  edit
}

async function edit(req, res) {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body.edit);
  console.log(book);
  res.json(book);
}


async function getListings(req, res) {
  const books = await Book.find({user: req.user._id}).exec();
  // console.log(books);
  res.json(books);
}


async function index(req, res) {
  console.log(req.body);
  const books = await Book.find({}).exec();
  res.json(books);
}

async function addBook(req, res) {
  try {
    // Add the book to the db
    req.body.user = req.user._id;
    const book = await Book.create(req.body.volumeInfo);
    console.log(book);
    res.json(book);

  } catch (err) {
    res.status(400).json(err);
  }
}

async function search(req, res) {
  console.log('HELLO!');
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
};






