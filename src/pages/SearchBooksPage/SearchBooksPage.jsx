import { useState, useEffect } from 'react';
import BookListingCard from '../../components/BookListingCard/BookListingCard';
import * as booksAPI from '../../utilities/books-api';
import '../SearchBooksPage/SearchBooksPage.css';


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
    {books.map((book, index) => {
       return <BookListingCard book={book} key={index}  />;
     })}
   </ul> 
   </div>
   
  );
}