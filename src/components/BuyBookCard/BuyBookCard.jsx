import './BuyBookCard.css';
export default function BuyBookCard({ book, handleAddToOrder }) {


    return (
      <div className="buy-book-card"> 
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
      <p name="desciption">{book.price}</p>
      <h6 className="card-title">Condition:</h6>
      <p name="desciption">{book.condition}</p>
      <h6 className="card-title">Description:</h6>
      <p name="desciption">{book.description}</p>
      <form>
        <button type="button" onClick={() => handleAddToOrder(book._id)}>Add To Cart</button>
      </form>
      </div>
    );
  }