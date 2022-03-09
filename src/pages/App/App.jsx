import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import SellBooksPage from '../SellBooksPage/SellBooksPage';
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage';
import CurrentListingsPage from '../CurrentListingsPage/CurrentListingsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/books/sell" element={<SellBooksPage />} />
              <Route path="/books/search" element={<SearchBooksPage />} />
              {/* <Route 
              exact 
              path="/books/:id" 
              element={<BookDetailPage />} /> */}
              <Route path="/listings" element={<CurrentListingsPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
