const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('You are in movies (routes file)!');
});

router.get('/hobbit', (req,res) =>{
    res.send('You are in Hobbit!');
});

module.exports = router;