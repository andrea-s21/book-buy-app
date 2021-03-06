import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import SellBooksPage from '../SellBooksPage/SellBooksPage';
import BuyBooksPage from '../BuyBooksPage/BuyBooksPage';
import CurrentListingsPage from '../CurrentListingsPage/CurrentListingsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/sell" element={<SellBooksPage user={user} />} />
            <Route path="/buy" element={<BuyBooksPage />} />
            <Route path="/listings" element={<CurrentListingsPage user={user} />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
