const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    mobile_number : {
        type: Number,
        required: true,
    },
    file_url : {
        type: String,
        required: true,
    },
    
})

const productHiring = new mongoose.model("Product2",productSchema);     //collection name provided
module.exports = productHiring ;