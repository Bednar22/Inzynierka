const jwt = require('jsonwebtoken');

//Authorization function(middleware)to identify if user is loggedin
//passes req.user as object ===> {_id:{here id}} tht can be used

function verifyToken(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('No access');

    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        console.log(verified);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('invalid token');
    }
}

module.exports = {
    verifyToken,
};
