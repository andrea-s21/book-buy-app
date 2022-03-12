const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/cart', ordersCtrl.cart);
router.post('/cart/:id', ordersCtrl.addToCart);

module.exports = router;