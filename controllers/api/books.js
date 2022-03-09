const Book = require('../../models/book');
var fetch = require("node-fetch");



module.exports = {
  search
}

async function search(req, res) {
  console.log('HELLO!');
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${req.body.query}&printType=books`
  )
    .then(res => {
      if (res.ok) return res.json()
      throw new Error('bad call')
    })
    .then(books => {
      res.json(books)
    })
};






