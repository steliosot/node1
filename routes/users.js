const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send({
        "username":"Stelios",
        "location":"London"
    });
});

router.get('/1', (req,res) =>{
    res.send('You are in user 1');
});

module.exports = router;