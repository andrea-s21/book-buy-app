import './BuyBookCardContainer.css';
import BuyBookCard from "../BuyBookCard/BuyBookCard";


export default function BookListContainer({ books, bookItems, setBookItems, handleAddToOrder }) {
  
    return(
        <ul className="book-container">
    {books.map((book, index) => {
       return <BuyBookCard 
       handleAddToOrder={handleAddToOrder}
       book={book} 
       key={index} 
       />;
     })}
      </ul> 
    );
}