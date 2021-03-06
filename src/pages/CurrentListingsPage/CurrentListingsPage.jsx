import './CurrentListingsPage.css';
import { useState, useEffect } from 'react';
import ListingCardContainer from '../../components/ListingCardContainer/ListingCardContianer';
import * as booksAPI from '../../utilities/books-api';


export default function CurrentListingsPage({ user }) {
  const [books, setBooks] = useState([]);
  const [updateBook, setUpdateBook] = useState({
    condition: '',
    price: ''
  });
  const [deleteBook, setDeleteBook] = useState();

  useEffect(function () {
    async function getAvaliableListings() {
      const books = await booksAPI.getListings();
      setBooks(books);
    }
    getAvaliableListings();
  }, []);

  async function updateBookListings(updateBook, id) {
    const book = await booksAPI.updateListings(updateBook, id)
    setUpdateBook(book);
  }

  async function deleteBookListings(deleteBook, id) {
    const book = await booksAPI.deleteListings(deleteBook, id)
    setDeleteBook(book)
  }

  return (
    <div>
      <h1 className="book-listing">My Book Listings</h1>
      <ul>
        <ListingCardContainer
          books={books}
          user={user}
          updateBook={updateBook}
          setUpdateBook={setUpdateBook}
          updateBookListings={updateBookListings}
          deleteBook={deleteBook}
          setDeleteBook={setDeleteBook}
          deleteBookListings={deleteBookListings}
        />
      </ul>
    </div>

  );
}