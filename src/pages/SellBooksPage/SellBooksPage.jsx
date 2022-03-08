import { useState, useEffect } from 'react';
import BookListContainer from '../../components/BookListContainer/BookListContainer';
import SellBookForm from '../../components/SellBookForm/SellBookForm';
import '../SearchBooksPage/SearchBooksPage.css';

// const API_KEY = process.env.REACT_APP_API_KEY;

export default function SellBooksPage() {
  const [query, setQuery] = useState();
  const [book, setBook] = useState([]);

  function handleGetBook(){
  const getBook = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books`
      )
      const book = await response.json();
      setBook(book);
    };
      getBook(book);
      console.log(book);  
    };

  return (
    <div>
            {/* <SellBookForm book={book} /> */}
              <input
               value={query}
               onChange={(evt) => setQuery(evt.target.value)}
               placeholder="Search Books"
               required
              //  pattern=".{10,}"
              />
              <button className="ISBN-form" onClick={handleGetBook}>Search</button>
            <BookListContainer book={book} />
    </div>
  );
}