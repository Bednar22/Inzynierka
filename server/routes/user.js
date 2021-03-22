const express = require('express');
const User = require('../models/user_model')

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(200);
    }

});

router.post('/',  async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    
    try {
    const savedUser = await user.save();
    res.json(savedUser);
    } catch(err) {
        res.status(200)
    }

});
module.exports = router;