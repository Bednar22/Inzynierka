const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    city: String,
    street: String,
    nr_domu: Number,
    nr_mieszkania: Number,
    kod_pocztowy: Number,
    zamowienia: Array, //moze nie potrzebne?
    role: String,
});

module.exports = mongoose.model('User', UserSchema);
