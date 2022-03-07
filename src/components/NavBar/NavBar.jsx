import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name}!</span>
      &nbsp; | &nbsp;
      <Link to="/books/sell">Sell Books</Link>
      &nbsp; | &nbsp;
      <Link to="/books/search">Search Available Books</Link>
      &nbsp; | &nbsp;
      <Link to="/listings">My Listings</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">My Orders</Link>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}