import { useState, useEffect } from 'react';
import './BuyBooksPage.css';
import BuyBookCardContainer from '../../components/BuyBookCardContainer/BuyBookCardContainer';
import * as ordersAPI from '../../utilities/orders-api';
import * as itemsAPI from '../../utilities/items-api';


export default function SearchBooksPage() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setMenuItems(items);
    } [];
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*-- Event Handlers --*/
  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addToCart(itemId);
    console.log(book, "ADDED!")
    setCart(updatedCart);
  }


  return (
    <main className="BookBuyPage">
      <h1>Search Books</h1>
      <ul>
        <BuyBookCardContainer books={books} cart={cart} setCart={setCart} items={items} handleAddToOrder={handleAddToOrder} />
      </ul>
    </main>

  );
}