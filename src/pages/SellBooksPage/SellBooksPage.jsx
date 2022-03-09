import { useState, useEffect } from 'react';
import BookListContainer from '../../components/BookListContainer/BookListContainer';
import SellBookForm from '../../components/SellBookForm/SellBookForm';
import '../SearchBooksPage/SearchBooksPage.css';

// const API_KEY = process.env.REACT_APP_API_KEY;

export default function SellBooksPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState({ items: [] });

  function handleGetBooks(){
  const getBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books`
      )
      const books = await response.json();
      setBooks(books);
    };
      getBooks(books);
      console.log(books);  
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