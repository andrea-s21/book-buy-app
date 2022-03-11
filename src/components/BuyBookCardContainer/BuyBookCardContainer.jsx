import './BuyBookCardContainer.css';
import BuyBookCard from "../BuyBookCard/BuyBookCard";


export default function BookListContainer({books}) {
    return(
        <ul className="book-container">
    {books.map((book, index) => {
       return <BuyBookCard book={book} key={index}  />;
     })}
      </ul> 
    );
}