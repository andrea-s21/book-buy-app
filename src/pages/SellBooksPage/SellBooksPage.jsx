import { useState, useEffect } from 'react';
import SellBookForm from '../../components/SellBookForm/SellBookForm';
import '../SearchBooksPage/SearchBooksPage.css';
import * as booksAPI from '../../utilities/books-api';


export default function SellBooksPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState({ items: [] });

  async function handleGetBooks(query) {
    console.log(query);
    const book = await booksAPI.search(query);
    setBooks(book)
  };

  async function addBook(newBook) {
    const books = await booksAPI.addBook(newBook)
    console.log(books, "SUCCESS!")
    setBooks(books)
  }

  return (
    <div>
      <h1>Sell A Book</h1>
      <SellBookForm books={books} query={query} setQuery={setQuery} handleGetBooks={handleGetBooks} addBook={addBook} />
    </div>
  );
}