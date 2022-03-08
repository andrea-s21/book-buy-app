import BookCard from "../BookCard/BookCard";


export default function BookListContainer({book}) {
    return(
        <ul>
        {book.items.map((book, index) => {
          return <BookCard book={book} key={index} />;
        })}
      </ul>
    );
}