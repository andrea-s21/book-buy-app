import { useState, useEffect } from 'react';
import ListingCard from '../../components/ListingCard/ListingCard';
import * as booksAPI from '../../utilities/books-api';


export default function CurrentListingsPage({user}) {
  const [books, setBooks] = useState([]);

  useEffect(function() {
    async function getAvaliableListings() {
        const books = await booksAPI.getListings();
        setBooks(books);
    }
    getAvaliableListings();
}, [])

  

  return (
    <div>
    <h1>My Book Listings</h1>
    <ul>
    {books.map((book, index) => {
       return <ListingCard book={book} key={index} user={user}  />;
     })}
   </ul> 
   </div>
   
  );
}