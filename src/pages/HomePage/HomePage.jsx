import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return(
        <div className="home-page">
        <h1 className="welcome">Welcome!</h1>
        <br />
        <h3 className="welcome-question">What would you like to do today?</h3>
        <div className="home-link-container">
        <Link className="home-links" to="/sell">Sell A Book</Link>
        </div>
        <br />
        <div className="home-link-container">
        <Link className="home-links" to="/buy">Purchase A Book</Link>
        </div>
        </div>
    );
}