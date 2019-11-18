const express = require('express');
const router = express.Router();
const Foods = require('../models/foods.js')


//Create route
router.post('/', (req, res)=> {
  Foods.create(req.body, (err, createdFood)=>{
    res.json(createdFood)
  });
});

module.exports = router;
