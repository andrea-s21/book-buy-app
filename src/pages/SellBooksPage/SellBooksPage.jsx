import { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import '../SearchBooksPage/SearchBooksPage.css';

// const API_KEY = process.env.REACT_APP_API_KEY;

export default function SellBooksPage() {
  const [query, setQuery] = useState('');
  const [book, setBook] = useState([]);

  useEffect(() => {
  const getBook = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn${query}&key=AIzaSyDm7IixUsUYb7T6XIRELsk8ks0ciK7xgdk`
      );
      const book = await response.json();
      setBook(book);
    };
      getBook();
      // console.log(book);  
    },[query]);

  function handleGetBook(evt){
    evt.preventDefault();
    setBook(book);
  }

  return (
    <div>
    <h1>Sell A Book</h1>
    <form className="ISBN-form" onSubmit={handleGetBook} >
      <label>Search for a books</label>
      <input
       value={query}
       onChange={(evt) => setQuery(evt.target.value)}
       placeholder="ISBN#"
       required
      //  pattern=".{10,}"
      />
      <button className="ISBN-form" type="submit">Search</button>
    </form>
    <BookCard book={book} />
    </div>
  );
}