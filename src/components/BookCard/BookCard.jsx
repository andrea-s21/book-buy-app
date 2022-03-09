export default function BookCard({ book, addBook }) {
  console.log(book);
  function handleAddBook() {
    addBook(book)
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
        <p className="card-title"name="authors">{book.volumeInfo.authors}</p>
        <h6>Published Date:</h6>
        <p className="card-title" name="published">{book.volumeInfo.publishedDate}</p>
        <h6>Average Rating:</h6>
        <p className="card-title" name="averageRating">{book.volumeInfo.averageRating}</p>
        <h6>Category:</h6>
        <p className="card-title" name="categories">{book.volumeInfo.categories}</p>
        <h6>Decription:</h6>
        <p className="card-title" name="desciption">{book.volumeInfo.description}</p>
        <form>
          <button onClick={handleAddBook}>List This Book</button>
        </form>
      </div>
    );
  }