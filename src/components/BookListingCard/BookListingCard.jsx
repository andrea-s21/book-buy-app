import { Link, Routes, Route } from "react-router-dom";

export default function BookDetails({ book }) {
    return (
      <div> 
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
      <h6>Decription:</h6>
      <p className="card-title" name="desciption">{book.description}</p>
      </div>
    );
  }