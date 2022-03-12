const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addBookToCart(req.params.id);
  res.json(cart);
}
