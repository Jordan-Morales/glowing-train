const express = require('express');
const router = express.Router();
const Foods = require('../models/foods.js')


//Create route
router.post('/', (req, res)=> {
  Foods.create(req.body, (err, createdFood)=>{
    res.json(createdFood)
  });
});

//Index route
router.get('/', (req, res)=>{
  Foods.find({}, (err, foundFoods)=> {
      res.json(foundFoods);
  });
});

//Delete route
router.delete('/:id', (req, res)=> {
  Foods.findByIdAndRemove(req.params.id, (err, deletedFood)=>{
      res.json(deletedFood);
  });
});

//Update Route
router.put('/:id', (req, res)=> {
  Foods.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedFood)=> {
    res.json(updatedFood);
  })
})

module.exports = router;
