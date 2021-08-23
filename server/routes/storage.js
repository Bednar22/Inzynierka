const express = require('express');
const router = express.Router();
const { cloudinary } = require('./cloudinary');
const Storage = require('../models/product_model');
const { addProductValidation } = require('../validations/productAdd.validation');
