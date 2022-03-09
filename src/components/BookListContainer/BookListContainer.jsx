import BookCard from "../BookCard/BookCard";


export default function BookListContainer({books, handleAddBook}) {
    return(
        <ul>
       {books.items.map((book, index) => {
          return <BookCard book={book} key={index} handleAddBook={handleAddBook} />;
        })}
      </ul> 
    );
}