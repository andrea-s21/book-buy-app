import { useState, useEffect } from 'react';
import ListingCardContainer from '../../components/ListingCardContainer/ListingCardContianer';
import * as booksAPI from '../../utilities/books-api';


export default function CurrentListingsPage({user}) {
  const [books, setBooks] = useState([]);
  const [updateBook, setUpdateBook] = useState({
    condition: '',
    price: ''
  });

  useEffect(function() {
    async function getAvaliableListings() {
        const books = await booksAPI.getListings();
        setBooks(books);
    }
    getAvaliableListings();
}, []);

async function updateBookListings(updateBook, id) {
  console.log(updateBook);
  const book = await booksAPI.updateListings(updateBook, id)
  console.log(book, "SUCCESS!")
  setUpdateBook(updateBook)
}
  

  return (
    <div>
    <h1>My Book Listings</h1>
    <ul>
    <ListingCardContainer books={books} user={user} updateBook={updateBook} setUpdateBook={setUpdateBook} updateBookListings={updateBookListings}  />
   </ul> 
   </div>
   
  );
}