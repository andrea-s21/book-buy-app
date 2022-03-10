import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BookCard({ book, addBook }) {
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState([]);


  function handleChangeState(evt) {
    const updatedNewBook = {
      ...newBook,
      [evt.target.price]: evt.target.value
    };
    setNewBook(updatedNewBook);
  }

  function handleAddBook() {
    //after submit form redirect user
    addBook(book)
    navigate('/listings');
  }

  return (
    <div>
      <img
        name="imageLinks"
        alt={`${book.volumeInfo.title} book`}
        src={`${book.volumeInfo.imageLinks.thumbnail}`}
      />
      <h6>Title:</h6>
      <p className="card-title" name="title">{book.volumeInfo.title}</p>
      <h6>Author(s):</h6>
      <p className="card-title" name="authors">{book.volumeInfo.authors}</p>
      <h6>Published Date:</h6>
      <p className="card-title" name="published">{book.volumeInfo.publishedDate}</p>
      <h6>Average Rating:</h6>
      <p className="card-title" name="averageRating">{book.volumeInfo.averageRating}</p>
      <h6>Category:</h6>
      <p className="card-title" name="categories">{book.volumeInfo.categories}</p>
      <h6>Decription:</h6>
      <p className="card-title" name="desciption">{book.volumeInfo.description}</p>
      <form>
        <label>Price: $</label>
        <input
          name="price"
          value={newBook.price}
          onChange={handleChangeState}
          placeholder="Price"
          required
        // pattern=".{4,}"
        />
        <label>Condition(e.g. Excellent, Good, Fair, Bad):</label>
        <input
          name="condition"
          value={newBook.condition}
          onChange={handleChangeState}
          placeholder="Book Condition"
          required
        // pattern=".{4,}"
        />
        <button onClick={handleAddBook}>List This Book</button>

      </form>
    </div>
  );
}