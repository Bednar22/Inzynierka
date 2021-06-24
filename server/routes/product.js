const express = require('express');
const router = express.Router();
const {cloudinary} =  require('./cloudinary')
const Product = require('../models/product_model')
const {addProductValidation} = require('./productAdd.validation');

/* PRODUCT ROUTE: /product/{} */

// Uploads image to cloudinary(image storage) and returns image data(uploadedResponse)

router.post('/uploadimage', async (req, res)=>{
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'BikeShop'
        })
        console.log(uploadedResponse)
        res.json(uploadedResponse)
    } catch (error) {
        console.log(error);
    }
})

// Adds product to database, validation by addProductValidation

router.post('/add', async (req, res)=>{
    const {error} = addProductValidation(req.body);
    if(error){console.log(error)
        return res.status(400).send(error.details[0].message)}
    
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        discountPrice:req.body.discountPrice,
        description:req.body.description,
        category:req.body.category,
        subCategory:req.body.subCategory,
        photo_id: req.body.photo_id
    })
    console.log(product);
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(400).send(err);
    }

})

// Get all products
router.get('/all', async (req, res)=>{
    const limit = parseInt(req.query.toLimit)
    const skip = parseInt(req.query.toSkip)
    await Product.find().limit(limit).skip(skip)
    .then(products => res.json(products))
    .catch(err => res.status(400).json("Error: " + err));
})


// Get ammount of all items => needed to pagination
router.get('/ammount', async (req, res)=> {
    await Product.countDocuments({}, (err, count)=> {
       res.json(count)
    })
     //.then(productsAmmount => res.json(poductsAmmount))
    //  .then(productsAmmount => console.log(poductsAmmount))
    //  .catch(err => res.status(400).json("Error: " + err));
})
module.exports = router;

