// DEPENDENCIES
const express = require('express');
// const mongoose = require('mongoose');
const app = express();


app.get('/', (req, res)=> {
    res.send('Hello World!');
})

// PORT 3000
app.listen(3000, ()=> {
    console.log('listening...');
})
