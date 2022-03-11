import './SellBookForm.css';
import SellBookContainer from "../SellBookContainer/SellBookContainer";


export default function SellBookForm({ books, query, setQuery, handleGetBooks, addBook }) {

    return (
        <div>
            <input
                value={query}
                onChange={(evt) => setQuery(evt.target.value)}
                placeholder="Search Books"
                required
                //  pattern=".{10,}"
                />
            <button className="ISBN-form" onClick={() => handleGetBooks(query)}>Search</button>
            <SellBookContainer books={books} addBook={addBook} />
        </div>
    );
}