const User = require('../models/user_model');

function userRoleAuth(role) {
    return (req, res, next)=>{
        User.findById(req.user._id).then(user => {
            if(user.role!== role){
                res.status(401)
                console.log('denied')
                return res.send('Acces denied')
            }
    }).catch(err=>res.status(400).json("error. didnt find the user"))
    
    next();    
        }
    
    }


module.exports = {
    userRoleAuth
}