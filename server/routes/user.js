const express = require('express');
const User = require('../models/user_model');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('./user.validation');

router.get('/', async(req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
})

router.post('/login', async (req, res) => {
    //validation process
    const {error} = loginValidation(req.body);
    if(error){return res.status(400).send(error.details[0].message)}
    //checking email and password
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Niepoprawny email lub hasło');

    const passCheck = await bcrypt.compare(req.body.password, user.password )
    if(!passCheck) return res.status(400).send('Niepoprawny email lub hasło'); 

    const token = jwt.sign({_id: user._id}, process.env.TOKEN);
    res.header('auth-token', token).send(token);
});

router.post('/register',  async (req, res) => {
    
    // //validation process
    const {error} = registerValidation(req.body);
    if(error){console.log(error)
        return res.status(400).send(error.details[0].message)}
    
    const emailUsed = await User.findOne({email: req.body.email})
    if(emailUsed){return res.status(400).send('Email already used');}

    //password hashing
    const salt = await bcrypt.genSalt(10); //higher value, more complex hash
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //creating user
    const user = new User({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name,
        surname: req.body.surname,
        city: req.body.city,
        street:req.body.street,
        nr_domu:req.body.nr_domu,
        nr_mieszkania:req.body.nr_mieszkania,
        kod_pocztowy: req.body.kod_pocztowy
    });
    console.log(user);
    try {
    const savedUser = await user.save();
    res.json(savedUser);
    } catch(err) {
        res.status(400).send(err);
    }

});
module.exports = router;