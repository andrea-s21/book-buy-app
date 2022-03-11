import './ListingCardContainer.css';
import ListingCard from "../ListingCard/ListingCard";

export default function ListingCardContainer({books}) {
    return(
        <ul className="listing-container">
    {books.map((book, index) => {
       return <ListingCard book={book} index={index} />;
     })}
      </ul> 
    );
}