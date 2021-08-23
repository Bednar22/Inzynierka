const mongoose = require('mongoose');

// Order schem used to save order
const OrderSchema = mongoose.Schema({
    products: Array,
    customer: Object,
    user_id: String,
    status: String,
    shipment: String,
    payment: String,
    date: Date,
    value: Object,
});
module.exports = mongoose.model('Order', OrderSchema);
