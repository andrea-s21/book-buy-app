import SellBookCard from "../SellBookCard/SellBookCard";


export default function BookListContainer({books, addBook}) {
    return(
        <ul className="book-container">
       {books.items.map((book, index) => {
          return <SellBookCard book={book} key={index} addBook={addBook} />;
        })}
      </ul> 
    );
}