import './BuyBookCardContainer.css';
import BuyBookCard from "../BuyBookCard/BuyBookCard";


export default function BookCardContainer({ books, handleAddToOrder }) {
  
    return(
      <>
         <h1 className="search-books">Search Books</h1> 
        <ul className="book-container">
    {books.map((book, index) => {
       return <BuyBookCard 
       handleAddToOrder={handleAddToOrder}
       book={book} 
       key={index} 
       />;
     })}
      </ul> 
     </>
    );
}