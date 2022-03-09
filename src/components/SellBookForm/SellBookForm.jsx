import BookListContainer from "../BookListContainer/BookListContainer";
import { useState } from "react";

export default function SellBookForm({books, query, setQuery, handleGetBooks, addBook}) {
    const [newBook, setNewBook] = useState({ items: [] });
    function handleAddBook(evt) {
        evt.preventDefault();
        addBook(newBook);
        setNewBook();
      }

    return(
        <div>
        <input
        value={query}
        onChange={(evt) => setQuery(evt.target.value)}
        placeholder="Search Books"
        required
       //  pattern=".{10,}"
       />
       <button className="ISBN-form" onClick={() => handleGetBooks(query)}>Search</button>
       <BookListContainer books={books} handleAddBook={handleAddBook} />
       </div>
    );
}