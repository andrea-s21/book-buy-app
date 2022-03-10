import { useState, useEffect } from 'react';
import BookDetails from '../../components/BookListingCard/BookListingCard';
import * as booksAPI from '../../utilities/books-api';
import '../SearchBooksPage/SearchBooksPage.css';


export default function CurrentListingsPage() {
  const [books, setBooks] = useState([]);

  useEffect(function() {
    async function getBookListings() {
        const books = await booksAPI.getUserListings();
        setBooks(books);
    }
    getBookListings();
}, [])

  

  return (
    <div>
    <h1>My Book Listings</h1>
    <ul>
    {books.map((book, index) => {
       return <BookDetails book={book} key={index}  />;
     })}
   </ul> 
   </div>
   
  );
}