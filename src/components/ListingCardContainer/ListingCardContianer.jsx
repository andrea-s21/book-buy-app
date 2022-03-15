import './ListingCardContainer.css';
import ListingCard from "../ListingCard/ListingCard";

export default function ListingCardContainer({ books, updateBook, setUpdateBook, updateBookListings, deleteBook, setDeleteBook, deleteBookListings }) {
  return (
    <ul className="listing-container">
      {books.map((book, index) => {
        return <ListingCard
          book={book} key={index}
          updateBook={updateBook}
          setUpdateBook={setUpdateBook}
          updateBookListings={updateBookListings}
          deleteBook={deleteBook}
          setDeleteBook={setDeleteBook}
          deleteBookListings={deleteBookListings}
        />;
      })}
    </ul>
  );
}