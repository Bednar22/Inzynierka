const express = require('express');
const router = express.Router();
const Order = require('../models/order_model')
const { verifyToken } = require('./verifyToken');
const nodemailer = require("nodemailer");

// Manages orders route ==> /order/{...}


//Adds new order to db and sends confirmation email
router.post('/add', async (req, res)=>{
    // const {error} = addProductValidation(req.body);
    // if(error){console.log(error)
    //     return res.status(400).send(error.details[0].message)}
    
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            //port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.NODEMAILER_USER, // generated  user
              pass: process.env.NODEMAILER_PASSWORD, // generated password
            },
          });


    const order = new Order({
        products:req.body.products,
        customer:req.body.customer,
        status:'new',
        shipment:req.body.shipment,
        payment:req.body.payment,
        date: new Date()   
    })
    console.log('TO JEST ORDER')
    console.log(order);
    try {
        const savedOrder = await order.save();
        console.log('DODANO ORDER')
        await transporter.sendMail({
            from: '"MTBikes.pl" <foo@example.com>', // sender address
            to: /* req.body.user.email */'mbednar2020@gmail.com', // list of receivers
            subject: `Potwierdzenie zamówienia ${order._id}`, // Subject line
            text: "Potwierdzenie", // plain text body
            html: "<b>Potwierdzenie</b>", // html body
          });
          res.json(savedOrder);
    } catch (error) {
        res.status(400).send(error);
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