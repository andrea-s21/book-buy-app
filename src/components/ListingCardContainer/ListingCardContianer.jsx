import './ListingCardContainer.css';
import ListingCard from "../ListingCard/ListingCard";

export default function ListingCardContainer({books, updateBook, setUpdateBook, updateBookListings}) {
    return(
        <ul className="listing-container">
    {books.map((book, index) => {
       return <ListingCard book={book} key={index} updateBook={updateBook} setUpdateBook={setUpdateBook} updateBookListings={updateBookListings}/>;
     })}
      </ul> 
    );
}