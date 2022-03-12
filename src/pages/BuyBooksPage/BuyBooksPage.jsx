import { useState, useEffect } from 'react';
import './BuyBooksPage.css';
import BuyBookCardContainer from '../../components/BuyBookCardContainer/BuyBookCardContainer';
import * as booksAPI from '../../utilities/books-api';
import * as ordersAPI from '../../utilities/orders-api';


export default function SearchBooksPage() {
  const [books, setBooks] = useState([]);
  
  useEffect(function() {
    async function getAvaliableBooks() {
      const books = await booksAPI.getAll();
      setBooks(books);
    }
    getAvaliableBooks();
  }, []);
  
  
  return (
    <main className="BookBuyPage">
      <h1>Search Books</h1>
    <ul>
    <BuyBookCardContainer books={books}  />
   </ul> 
   </main>
   
  );
}