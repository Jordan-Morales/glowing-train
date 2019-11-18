// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.get('/', (req, res)=> {
    res.send('Hello World!');
})

//Middleware
//This needs to be above the routes.
app.use(express.json()); //use .json not urlencoded
app.use(express.static('public'));


mongoose.connect('mongodb://localhost:27017/meanfoods', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongoose...');
});

// PORT 3000
app.listen(3000, ()=> {
    console.log('listening...');
})
