
export default function BuyBookCard({ book }) {

  function handleAddToCart() {

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
        <button type="button" onClick={handleAddToCart}>Add To Cart</button>
      </form>
      </div>
    );
  }