  
const router = require('express').Router();

// add authenticate to function to use middleware
const authenticate = require('../auth/authenticate-middleware.js')
const Users = require('./user-model.js');

router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json({ users });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json( {message: `server 500 error` })
      });
    });  

module.exports = router;