const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        jwt.verify(token, secrets.jwtSecrets, (err, decodedToken) => {
            if(err) {
                console.log(err);
                res.status(401).json({ message: 'YOU SHALL NOT PASS!'})
            }else{
                req.user = { username: decodedToken.username}
                next();
            }
        })
    }else{
        res.status(500).json({ message: 'server error were working on it', err})
    }
};