const mongoose = require('mongoose');

const StorageSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    product_id: String,
    storage_location: String,
    graphNode: Number,
    packingTime: Number,
});

module.exports = mongoose.model('Storage', StorageSchema);
