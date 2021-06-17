const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    mainCategory: String,
    subCategories: Array
})

module.exports = mongoose.model('Category', CategorySchema);