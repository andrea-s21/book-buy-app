import './SellBookForm.css';
import SellBookContainer from "../SellBookContainer/SellBookContainer";


export default function SellBookForm({ user, books, query, setQuery, handleGetBooks, addBook }) {

    return (
        <div>
            <input
                value={query}
                onChange={(evt) => setQuery(evt.target.value)}
                placeholder="Search Books"
                required
                //  pattern=".{10,}"
                />
                <br />
            <button className="sell-form" onClick={() => handleGetBooks(query)}>Search</button>
            <hr />
            <br />
            <SellBookContainer user={user} books={books} addBook={addBook} />
        </div>
    );
}