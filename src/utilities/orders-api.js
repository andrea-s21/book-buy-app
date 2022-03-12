import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }

export function addToCart() {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/items`, 'POST');
  }