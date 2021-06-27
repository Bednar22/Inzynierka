const express = require('express');
const User = require('../models/user_model');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('./user.validation');
const { verifyToken } = require('./verifyToken');
require('dotenv/config');
const {userRoleAuth} = require('./userRoleAuth')

//ALL PATH START WITH: '/users/{...} ==> !!!

//Gets user role by user id from token
router.get('/user',verifyToken,userRoleAuth(process.env.ROLE_DEFAULT),async(req,res)=>{
    await User.findOne({_id: req.user._id})
    .then(user=>{res.json({userRole:user.role, userId:user._id})})
    .catch(err=>res.status(400).json("error. didnt find the user"))
})

//Gets whole user info
router.get('/userInfo/:pies',verifyToken,async(req,res)=>{
    console.log(req.params)
    await User.findOne({_id: req.user._id})
    .then(user=>{console.log(user)
        res.json(user)})
    .catch(err=>res.status(400).json("error. didnt find the user"))
})



//Get all for tests
router.get('/', async(req,res)=>{
    await User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
})


//Logs users to website, returns jwt to user
router.post('/login', async (req, res) => {
    
    //validation process
    const {error} = loginValidation(req.body);
    if(error){return res.status(400).send(error.details[0].message)}
    //checking email and password
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Niepoprawny email lub hasło');

    const passCheck = await bcrypt.compare(req.body.password, user.password )
    if(!passCheck) return res.status(400).send('Niepoprawny email lub hasło'); 

    const token = jwt.sign({_id: user._id}, process.env.TOKEN/* , {expiresIn:600} */);
    res.header('authtoken', token).json(user.role).send()
    //res.header({userRole:user.role, token: token})
    //{res.json({userRole:user.role, userId:user._id})}
});

// sings in user to website, process with validation and password hashing
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
        kod_pocztowy: req.body.kod_pocztowy,
        role: 'defUser'
    });
    console.log(user);
    try {
    const savedUser = await user.save();
    res.json(savedUser);
    } catch(err) {
        res.status(400).send(err);
    }

});

router.put('/', async(req,res)=>{
    await User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});



module.exports = router;