const jwt = require('jsonwebtoken');


//Authorization function to identify logged user

function  auth(req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('No access');

    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('invlid token');
    }
}