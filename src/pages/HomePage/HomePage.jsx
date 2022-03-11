import './HomePage.css';

export default function HomePage() {
    return(
        <div className="home-page">
        <h1>Welcome!</h1>
        <h3>What would you like to do today?</h3>
            <button>Sell A Book</button>
            <button>Purchase A Book</button>
        </div>
    );
}