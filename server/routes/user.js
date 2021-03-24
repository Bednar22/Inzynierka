const express = require('express');
const User = require('../models/user_model');
const router = express.Router();
const {registerValidation} = require('./user.validation');

router.get('/login', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(200).send(err);
    }

});

router.post('/register',  async (req, res) => {
    
    //validation process
    const {error} = registerValidation(req.body);
    if(error){return res.status(400).send(error.details[0].message)}
    
    const emailUsed = await User.findOne({email: req.body.email})
    if(emailUsed){return res.status(400).send('Email already used');}

    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        city: req.body.city,
        street:req.body.street,
        nr_domu:req.body.nr_domu,
        nr_mieszkania:req.body.nr_mieszkania,
        kod_pocztowy: req.body.kod_pocztowy
    });
    
    try {
    const savedUser = await user.save();
    res.json(savedUser);
    } catch(err) {
        res.status(400).send(err);
    }

});
module.exports = router;