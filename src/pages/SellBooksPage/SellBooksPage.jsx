import { useState, useEffect } from 'react';
import SellBookForm from '../../components/SellBookForm/SellBookForm';
import '../SearchBooksPage/SearchBooksPage.css';
import * as booksAPI from '../../utilities/books-api';


// const API_KEY = process.env.REACT_APP_API_KEY;

export default function SellBooksPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState({ items: [] });

  async function handleGetBooks(query){
    console.log(query);
    const book = await booksAPI.search(query);
    setBooks(book)
    };

    function addBook(book) {
      setBooks([...books, book]);
    }

  return (
    <div>
      <h1>Sell A Book</h1>
            <SellBookForm books={books} query={query} setQuery={setQuery} handleGetBooks={handleGetBooks} addBook={addBook} />
    </div>
  );
}