const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../routes/{usermodel}')
const secrets = require('../config/secrets')

//post register
router.post('/register', (req, res) => {
    // implement registration 
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    Users.add(user)
        .then(saved => {
            res.status(200).json(saved)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

//post login 
router.post('/login', (req, res) => {
    //implement login 
    let { username, password } = req.body;

    Users.findBy({ username })
})