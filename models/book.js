const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    imageLinks: {thumbnail: {type: String, default: "Unavailiable"}},
    title: {type: String},
    authors: [],
    publisher: {type: String, default: 'Unavailiable'},
    publishedDate: {type: String, default: 'Unavailiable'},
    averageRating: {type:Number, default: 'Unavailiable'},
    categories: [],
    description: { type: String, default: 'Unavailiable'},
    condition: {type: String, default: 'Unavailiable'},
    price: {type: String, default: 'Unavailiable'},
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema);