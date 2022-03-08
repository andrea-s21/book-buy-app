export default function BookCard({ book }) {
    return (
      <div className="flight-card">
        <p className="card-title">{book.volumeInfo.title}</p>
        <p className="card-title">{book.volumeInfo.subtitle}</p>
        <p className="card-title">{book.volumeInfo.authors}</p>
        <p className="card-title">{book.volumeInfo.publishedDate}</p>
        <p className="card-title">{book.volumeInfo.averageRating}</p>
        <p className="card-title">{book.volumeInfo.averageRating}</p>
        <p className="card-title">{book.volumeInfo.description}</p>
        {/* <img className="logo" src={book.covers.key} alt="logo" />  */}
        {/* <p className="card-title">{book.authors}</p> */}
        {/* <p className="card-title">{book.publish_date}</p>
        <p className="card-title">{book.isbn_10}</p> */}
      </div>
    );
  }