const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DB_CONNECTION,
{ useUnifiedTopology: true, useNewUrlParser: true},  
() => console.log('!!! connected to DB !!!')
 );

//ROUTES
const userRoute = require('./routes/user');
app.use('/users', userRoute);

app.listen(3001, () => {
    console.log(`Server is running on port: 3001`);
});


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

