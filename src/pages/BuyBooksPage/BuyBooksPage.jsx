import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyBooksPage.css';
import BuyBookCardContainer from '../../components/BuyBookCardContainer/BuyBookCardContainer';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as booksAPI from '../../utilities/books-api';
import * as ordersAPI from '../../utilities/orders-api';



export default function SearchBooksPage() {
  const [books, setBooks] = useState([]);
  const [bookItems, setBookItems] = useState([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  
  useEffect(function() {
    async function getAvaliableBooks() {
      const books = await booksAPI.getAll();
      setBooks(books);
    }
    getAvaliableBooks();
  }, []);

    useEffect(function() { 
    async function getCart(bookItems) {
      const cart = await ordersAPI.getCart(bookItems);
      setCart(cart);
    }
    getCart();
  }, []);

  // async function addBookToCart(bookItem, id) {
  //   // console.log(updateBook);
  //   const book = await ordersAPI.addBookToCart(bookItem, id)
  //   console.log(book, "SUCCESS!")
  //   setBookItems(bookItems)
  // }

  async function handleAddToOrder(bookId) {
    console.log(bookId);
    const updatedCart = await ordersAPI.addBookToCart(bookId);
    setCart(updatedCart);
  }
  

  // async function handleChangeQty(itemId, newQty) {
  //   const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  //   setCart(updatedCart);
  // }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }
  
  return (
    <main className="BookBuyPage">
      <h1>Search Books</h1>
    <ul>
    <BuyBookCardContainer books={books} bookItems={bookItems} setBookItems={setBookItems} handleAddToOrder={handleAddToOrder}  />
   </ul> 
   <OrderDetail
        order={cart}
        // handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
   </main>
   
  );
}