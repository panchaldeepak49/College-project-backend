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
    message : {
        type: String,
        required: true,
    },
    
})

const productSmtContacts = new mongoose.model("Product3",productSchema);     //collection name provided
module.exports = productSmtContacts ;