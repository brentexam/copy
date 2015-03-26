// Database link
var mongoose = require('mongoose');

// Define the product model (fields and data types)
var ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number
});

//Make the model public so other files can access it
module.exports = mongoose.model('Product', ProductSchema);
