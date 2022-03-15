const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = require('./bookSchema');

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  book: bookSchema,
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  return this.qty * this.book.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineItems.reduce((total, book) => total + book.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineItems.reduce((total, book) => total + book.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addBookToCart = async function(bookId) {
  const cart = this;
  console.log(cart.lineItems, 'Book Item Console');
  const lineItem = cart.lineItems.find(lineItem => lineItem.book._id.equals(bookId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const book = await mongoose.model('Book').findById(bookId);
    cart.lineItems.push({ book });
  }
  return cart.save();
};

orderSchema.methods.setItemQty = function(bookItem, newQty) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.book._id.equals(bookItem));
  if (lineItem && newQty <= 0) {
    lineItem.remove();
  } else if (lineItem) {
    lineItem.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);