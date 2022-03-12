import { useState, useEffect } from 'react';
import './BuyBooksPage.css';
import BuyBookCardContainer from '../../components/BuyBookCardContainer/BuyBookCardContainer';
import * as ordersAPI from '../../utilities/orders-api';


export default function SearchBooksPage() {
  const [cart, setCart] = useState(null);
  
  useEffect(function() {
  async function getCart() {
    // console.log(cart);
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }
  getCart();
}, []);

  
async function addToCart(book, id) {
  const cart = await ordersAPI.addBookToCart(book, id)
  console.log(book, "ADDED!")
  setCart(cart);
}
  
  
  return (
    <main className="BookBuyPage">
      <h1>Search Books</h1>
    <ul>
    <BuyBookCardContainer books={books} cart={cart} setCart={setCart} addToCart={addToCart}  />
   </ul> 
   </main>
   
  );
}