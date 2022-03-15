import { useState, useEffect } from 'react';
import SellBookForm from '../../components/SellBookForm/SellBookForm';
import * as booksAPI from '../../utilities/books-api';
import './SellBooksPage.css';


export default function SellBooksPage({ user }) {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState({ items: [] });


  async function handleGetBooks(query) {
    console.log(query);
    const book = await booksAPI.search(query);
    setBooks(book)
  };

  async function addBook(newBook) {
    console.log(newBook)
    const books = await booksAPI.addBook(newBook)
    console.log(books, "SUCCESS!")
    setBooks(books)
  }

  return (
    <div>
      <h1 className="sell-book">Sell A Book</h1>
      <div>
        <h3>Please follow the instructions below to list a book for sale.</h3>
        <br />
        <h6>1. Search for your book using the search bar below by entering the book's title or ISBN#.</h6>
        <br />
        <h6>2. Once you find your book, enter the price and condition.</h6>
        <br />
        <h6>3. Select "Add Listing" and update your listing as needed from the "My Listings" page.</h6>
        <br />
      </div>
      <SellBookForm user={user}
        books={books} query={query}
        setQuery={setQuery}
        handleGetBooks={handleGetBooks}
        addBook={addBook} />
    </div>
  );
}