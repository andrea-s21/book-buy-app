import './ListingCard.css';
import { useNavigate } from 'react-router-dom';

export default function ListingCard({ book, updateBook, setUpdateBook, updateBookListings, deleteBook, setDeleteBook, deleteBookListings }) {
  const navigate = useNavigate();

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
    navigate('/search');
  }

  return (
    <div className="book-listing-card">
      <img
        name="imageLinks"
        alt={`${book.title} book`}
        src={`${book.imageLinks.thumbnail}`}
      />
      <h6 className="card-title">Title:</h6>
      <p name="title">{book.title}</p>
      <h6>Author(s):</h6>
      <p name="authors">{book.authors}</p>
      <h6 className="card-title">Published Date:</h6>
      <p name="published">{book.publishedDate}</p>
      <h6 className="card-title">Average Rating:</h6>
      <p name="averageRating">{book.averageRating}</p>
      <h6 className="card-title">Category:</h6>
      <p name="categories">{book.categories}</p>
      <h6 className="card-title">Price:</h6>
      <p name="desciption">{`$${book.price.toFixed(2)}`}</p>
      <h6 className="card-title">Condition:</h6>
      <p name="desciption">{book.condition}</p>
      <form>
        <label>Price: $</label>
        <input
          name="price"
          type="number"
          value={updateBook.price}
          onChange={handleChangeState}
          placeholder="Price"
          required
        />
        <label>Condition(e.g. Excellent, Good, Fair, Bad):</label>
        <input
          name="condition"
          value={updateBook.condition}
          onChange={handleChangeState}
          placeholder="Book Condition"
          required
        />
        <br />
        <br />
        <button type="button" onClick={handleUpdateBook}>Update Book</button>
        <br />
        <br />
        <button type="button" onClick={handleDeleteBook}>Delete Book</button>
      </form>
    </div>

  );
}