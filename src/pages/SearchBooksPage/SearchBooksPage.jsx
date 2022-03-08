import { useState, useEffect } from 'react';
// import BookCard from '../../components/BookCard/BookCard';
import '../SearchBooksPage/SearchBooksPage.css';

// const KEY = process.env.REACT_APP_API_KEY;

export default function SearchBooksPage() {
  // const [query, setQuery] = useState('');
  // const [book, setBook] = useState([]);

  // useEffect(() => {
  // const getBook = async () => {
  //   const response = await fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=isbn${query}`
  //     );
  //     const book = await response.json();
  //     setBook(book);
  //   };
  //     getBook();
  //     // console.log(book);  
  //   },[query]);

  // function handleGetBook(evt){
  //   evt.preventDefault();
  //   setBook(book);
  // }

  return (
    <div>
    <h1>Search Books</h1>
    {/* <form className="ISBN-form" onSubmit={handleGetBook} >
      <label>Search for a books</label>
      <input
       value={query}
       onChange={(evt) => setQuery(evt.target.value)}
       placeholder="ISBN#"
       required
      //  pattern=".{10,}"
      />
      <button className="ISBN-form" type="submit">Search</button>
    </form> */}
    </div>
  );
}