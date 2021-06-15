const express = require('express');
const router = express.Router();
const {cloudinary} =  require('./cloudinary')
const Product = require('../models/product_model')

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

router.post('/addProduct', async (req, res)=>{
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        discountPrice:req.body.discountPrice,
        description:req.body.description,
        category:req.body.category,
        subCategory:req.body.subCategory,
        photoId: req.body.photoId
    })
    console.log(product);
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(400).send(err);
    }

})
module.exports = router;