import './SellBookContainer.css';
import SellBookCard from "../SellBookCard/SellBookCard";


export default function BookListContainer({user, books, addBook}) {
    return(
        <ul className="book-container">
       {books.items.map((book, index) => {
          return <SellBookCard user={user} book={book} key={index} addBook={addBook} />;
        })}
      </ul> 
    );
}