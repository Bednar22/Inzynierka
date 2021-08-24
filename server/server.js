const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

// LIMITS FOR BIGGER FILES (IMAGES)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
    () => console.log('!!! connected to DB !!!')
);

//ROUTES (API)

// User
const userRoute = require('./routes/user');
app.use('/users', userRoute);
//productUpload
const productRoute = require('./routes/product');
app.use('/product', productRoute);
//categories
const categoriesRoute = require('./routes/categories');
app.use('/categories', categoriesRoute);
//orders
const ordersRoute = require('./routes/order');
app.use('/order', ordersRoute);
//storage
const storageRoute = require('./routes/storage');
app.use('/storage', storageRoute);

app.listen(3001, () => {
    console.log(`Server is running on port: 3001`);
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')));
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'));
});
