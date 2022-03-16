import './SellBookCard.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BookCard({ user, book, addBook }) {
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState({
    condition: '',
    price: ''
  });


  function handleChangeState(evt) {
    const updatedNewBook = {
      ...newBook,
      [evt.target.name]: evt.target.value
    };
    setNewBook(updatedNewBook);
  }

  function handleAddBook(id) {
    const bookWithUserInfo = { ...book };
    bookWithUserInfo.volumeInfo.condition = newBook.condition;
    bookWithUserInfo.volumeInfo.price = newBook.price;
    bookWithUserInfo.volumeInfo.user = id;
    addBook(bookWithUserInfo)
    navigate('/buy');
  }

  return (
    <div className="sell-book-card">
      <img
        name="imageLinks"
        alt={`${book.volumeInfo.title} book`}
        src={`${book.volumeInfo?.imageLinks.thumbnail}`}
      />
      <h6 className="card-title">Title:</h6>
      <p name="title">{book.volumeInfo.title}</p>
      <h6 className="card-title">Author(s):</h6>
      <p name="authors">{book.volumeInfo.authors}</p>
      <h6 className="card-title">Published Date:</h6>
      <p name="published">{book.volumeInfo.publishedDate}</p>
      <h6 className="card-title">Average Rating:</h6>
      <p name="averageRating">{book.volumeInfo.averageRating}</p>
      <h6 className="card-title">Category:</h6>
      <p name="categories">{book.volumeInfo.categories}</p>
      <h6 className="card-title">Decription:</h6>
      <p name="desciption">{book.volumeInfo.description}</p>
      <form>
        <label>Price: $</label>
        <input
          name="price"
          type="number"
          value={newBook.price}
          onChange={handleChangeState}
          placeholder="Price"
          required
        />
        <label>Condition:</label>
        <input
          name="condition"
          value={newBook.condition}
          onChange={handleChangeState}
          placeholder="e.g. Excellent, Good, Fair, Bad"
        />
        <br />
        <br />
        <button type="button" onClick={() => handleAddBook(user._id)}>List This Book</button>
      </form>
    </div>
  );
}