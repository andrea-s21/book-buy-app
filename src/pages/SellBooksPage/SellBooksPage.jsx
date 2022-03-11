import { useState, useEffect } from 'react';
import SellBookForm from '../../components/SellBookForm/SellBookForm';
import * as booksAPI from '../../utilities/books-api';
import './SellBooksPage.css';


export default function SellBooksPage({user}) {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState({ items: [] });
  
  // useEffect(function() {
  async function handleGetBooks(query) {
    console.log(query);
    const book = await booksAPI.search(query);
    setBooks(book)
  };
  // handleGetBooks();
// },[]);

  async function addBook(newBook) {
    console.log(newBook)
    const books = await booksAPI.addBook(newBook)
    console.log(books, "SUCCESS!")
    setBooks(books)
  }

  return (
    <div>
      <h1>Sell A Book</h1>
      <SellBookForm user={user} books={books} query={query} setQuery={setQuery} handleGetBooks={handleGetBooks} addBook={addBook} />
    </div>
  );
}