import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ListingCard({ book, updateBook, setUpdateBook, updateBookListings, deleteBook, setDeleteBook, deleteBookListings }) {

  function handleChangeState(evt) {
    const updatedBook = {
      ...updateBook,
      [evt.target.name]: evt.target.value
    };
    setUpdateBook(updatedBook);
  }

  function handleUpdateBook(evt) {
    evt.preventDefault();
    book.condition = updateBook.condition;
    book.price = updateBook.price;
    updateBookListings(updateBook, book._id);
    setUpdateBook({
      condition: '',
      price: ''
    });
  }

  function handleDeleteBook() {
    deleteBookListings(deleteBook, book._id);
    setDeleteBook(deleteBook);
  }

    return (
      <div className="book-listing"> 
      <img
        name="imageLinks"
        alt={`${book.title} book`}
        src={`${book.imageLinks.thumbnail}`}
      />
      <h6>Title:</h6>
      <p className="card-title" name="title">{book.title}</p>
      <h6>Author(s):</h6>
      <p className="card-title" name="authors">{book.authors}</p>
      <h6>Published Date:</h6>
      <p className="card-title" name="published">{book.publishedDate}</p>
      <h6>Average Rating:</h6>
      <p className="card-title" name="averageRating">{book.averageRating}</p>
      <h6>Category:</h6>
      <p className="card-title" name="categories">{book.categories}</p>
      <h6>Price:</h6>
      <p className="card-title" name="desciption">{book.price}</p>
      <h6>Condition:</h6>
      <p className="card-title" name="desciption">{book.condition}</p>
      <form>
        <label>Price: $</label>
        <input
          name="price"
          type="number"
          value={updateBook.price}
          onChange={handleChangeState}
          placeholder="Price"
          required
        // pattern=".{4,}"
        />
        <label>Condition(e.g. Excellent, Good, Fair, Bad):</label>
        <input
          name="condition"
          value={updateBook.condition}
          onChange={handleChangeState}
          placeholder="Book Condition"
          required
        // pattern=".{4,}"
        />
        <button type="button" onClick={handleUpdateBook}>Update Book</button>
        <button type="button" onClick={handleDeleteBook}>Delete Book</button>
      </form>
      </div>
      
    );
  }