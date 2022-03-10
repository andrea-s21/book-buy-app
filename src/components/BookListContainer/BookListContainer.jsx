import BookCard from "../SellBookCard/SellBookCard";


export default function BookListContainer({books, addBook}) {
    return(
        <ul>
       {books.items.map((book, index) => {
          return <BookCard book={book} key={index} addBook={addBook} />;
        })}
      </ul> 
    );
}