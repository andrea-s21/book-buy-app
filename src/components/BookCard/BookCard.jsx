export default function BookCard({ book, handleAddBook }) {
    return (
      <div>
        <img
            alt={`${book.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
        <h6>Title:</h6>
        <p className="card-title" name="title">{book.volumeInfo.title}</p>
        <h6>Author(s):</h6>
        <p className="card-title"name="author">{book.volumeInfo.authors}</p>
        <h6>Published Date:</h6>
        <p className="card-title" name="published">{book.volumeInfo.publishedDate}</p>
        <h6>Average Rating:</h6>
        <p className="card-title" name="rating">{book.volumeInfo.averageRating}</p>
        <h6>Category:</h6>
        <p className="card-title" name="category">{book.volumeInfo.categories}</p>
        <h6>Decription:</h6>
        <p className="card-title" name="desciption">{book.volumeInfo.description}</p>
      <div>
        <form>
          <button onClick={handleAddBook}>List This Book</button>
        </form>
        </div>
      </div>
    );
  }