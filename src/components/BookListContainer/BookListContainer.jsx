import BookCard from "../BookCard/BookCard";


export default function BookListContainer({books, addBook}) {
    return(
        <ul>
       {books.items.map((book, index) => {
          return <BookCard book={book} key={index} addBook={addBook} />;
        })}
      </ul> 
    );
}