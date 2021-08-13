const User = require('../models/user_model');
const jwt = require('jsonwebtoken');

function userRoleAuth(role) {
    return (req, res, next) => {
        const token = req.header('auth-token');
        if (!token) return res.status(401).send('No access');

        try {
            const verified = jwt.verify(token, process.env.TOKEN);
            //console.log(verified);
            req.user = verified;
            if (verified.role === role) {
                next();
            } else {
                res.status(401);
                console.log('denied');
                return res.send('Acces denied');
            }
        } catch (error) {
            res.status(400).send('invalid token');
        }
    };
}

module.exports = {
    userRoleAuth,
};
