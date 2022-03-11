import { useState, useEffect } from 'react';
import BuyBookCardContainer from '../../components/BuyBookCardContainer/BuyBookCardContainer';
import * as booksAPI from '../../utilities/books-api';



export default function SearchBooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(function() {
    async function getAvaliableBooks() {
        const books = await booksAPI.getAll();
        setBooks(books);
    }
    getAvaliableBooks();
}, [])

  

  return (
    <div>
      <h1>Search Books</h1>
    <ul>
    <BuyBookCardContainer books={books}  />;
   </ul> 
   </div>
   
  );
}