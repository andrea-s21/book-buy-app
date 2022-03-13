// import './OrderHistoryPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function OrderHistoryPage({ user, setUser }) {
    /*--- State --- */
    const [orders, setOrders] = useState([]);
    const [activeOrder, setActiveOrder] = useState(null);
  
    /*--- Side Effects --- */
    useEffect(function () {
      // Load previous orders (paid)
      async function fetchOrderHistory() {
        const orders = await ordersAPI.getOrderHistory();
        setOrders(orders);
        // If no orders, activeOrder will be set to null below
        setActiveOrder(orders[0] || null);
      }
      fetchOrderHistory();
    }, []);
  
    /*--- Event Handlers --- */
    function handleSelectOrder(order) {
      setActiveOrder(order);
    }
  
    /*--- Rendered UI --- */
    return (
      <main className="OrderHistoryPage">
        <aside>
          <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        </aside>
        <OrderList
          orders={orders}
          activeOrder={activeOrder}
          handleSelectOrder={handleSelectOrder}
        />
        <OrderDetail
          order={activeOrder}
        />
      </main>
    );
  }