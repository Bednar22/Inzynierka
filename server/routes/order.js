const express = require('express');
const router = express.Router();
const Order = require('../models/product_model')
const { verifyToken } = require('./verifyToken');
// Manages orders route ==> /order/{...}


//Adds new order to db
router.post('/add', async (req, res)=>{
    const {error} = addProductValidation(req.body);
    if(error){console.log(error)
        return res.status(400).send(error.details[0].message)}
    
    const order = new Order({
        products:req.body.products,
        user:req.body.user,
        status:req.body.status,
        deliveryType:req.body.deliveryType,
        paymentType:req.body.paymentType,
        
    })
    console.log(order);
    try {
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (error) {
        res.status(400).send(err);
    }

})

//Gets orders from one user
router.get('/',verifyToken,async(req,res)=>{
    await Order.find({user_id: req.user._id})
    .then(orders=>{console.log(orders)
        res.json(orders)})
    .catch(err=>res.status(400).json("error. didnt find orders for this user"))
})


//Gets order by id
router.get('/:id', verifyToken ,async(req,res)=>{
    await Order.findOne({_id: req.params.id})
    .then(user=>{console.log(user)
        res.json(user)})
    .catch(err=>res.status(400).json("error. didnt find the user"))
})

module.exports = router;