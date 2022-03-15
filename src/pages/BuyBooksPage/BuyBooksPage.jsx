import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyBooksPage.css';
import BuyBookCardContainer from '../../components/BuyBookCardContainer/BuyBookCardContainer';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as booksAPI from '../../utilities/books-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function BuyBooksPage() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getAvaliableBooks() {
      const books = await booksAPI.getAll();
      setBooks(books);
    }
    getAvaliableBooks();
  }, []);

  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(bookId) {
    const updatedCart = await ordersAPI.addBookToCart(bookId);
    setCart(updatedCart);
  }


  async function handleChangeQty(bookId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(bookId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <main className="BookBuyPage">
      <ul>
        <BuyBookCardContainer books={books} handleAddToOrder={handleAddToOrder} />
      </ul>
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>

  );
}