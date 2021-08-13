const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    category: String,
    subCategory: String,
    price: Number,
    discount_price: Number,
    photo_id: String,
    description: String,
});

module.exports = mongoose.model('Product', ProductSchema);
