const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose


const bookSchema = require('./bookSchema');

module.exports = mongoose.model('Book', bookSchema);