const mongoose = require('mongoose');

// Order schem used to save order
const OrderSchema = mongoose.Schema({
    products: Array,
    customer: Object,
    user_id: String, //for logged in --> then the user object CAN be empty (cause data will come from User collection)
    status: String,
    deliveryType: String,
    paymentType: String,
    date: Date
})

module.exports = mongoose.model('Order', OrderSchema);