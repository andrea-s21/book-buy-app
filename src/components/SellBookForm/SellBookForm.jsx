import BookListContainer from "../BookListContainer/BookListContainer";


export default function SellBookForm({books, query, setQuery, handleGetBooks, addBook}) {

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
       <BookListContainer books={books} addBook={addBook} />
       </div>
    );
}