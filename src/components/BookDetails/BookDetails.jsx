import { Link, Routes, Route } from "react-router-dom";

export default function BookDetails({ book }) {
    return (
      <div>
        <Link to={`/book/${book.id}`}>
        <div>
        <img
            alt={`${book.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
        </div>
        <h6>Title:</h6>
        <p className="card-title" name="title">{book.volumeInfo.title}</p>
        </Link>
        <h6>Author(s):</h6>
        <p className="card-title"name="author">{book.volumeInfo.authors}</p>
        <h6>Published Date:</h6>
        <p className="card-title" name="published">{book.volumeInfo.publishedDate}</p>
        <h6>Language:</h6>
        <p className="card-title" name="language">{book.volumeInfo.language}</p>
        <h6>Average Rating:</h6>
        <p className="card-title" name="rating">{book.volumeInfo.averageRating}</p>
        <h6>Category:</h6>
        <p className="card-title" name="category">{book.volumeInfo.categories}</p>
        <h6>Decription:</h6>
        <p className="card-title" name="desciption">{book.volumeInfo.description}</p>
        <BookDetailPage book={book}/>
      </div>
    );
  }