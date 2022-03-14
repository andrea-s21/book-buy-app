

export default function SearchBookForm({ searchQuery, setSearchQuery, handleSearch }) {
    return (
        <div>
            <input
                value={searchQuery}
                onChange={(evt) => setSearchQuery(evt.target.value)}
                placeholder="Search Books in Database"
                required
            />
            <button onClick={() => handleSearch(searchQuery)}>Search</button>
        </div>
    );
}