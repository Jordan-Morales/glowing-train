const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    flavor: String
});

const Foods = mongoose.model('Food', foodSchema);

module.exports = Foods;
