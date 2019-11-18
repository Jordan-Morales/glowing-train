const express = require('express');
const router = express.Router();
const Foods = require('../models/foods.js')

router.get('/', (req, res)=> {
    res.send('index');
})

module.exports = router;
