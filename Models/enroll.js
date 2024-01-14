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
    mobile_number :{
        type: Number,
        required: true,
    } ,
    contact_type : {
        type: String,
        required: true,
    }
})

const productEnroll = new mongoose.model("Product",productSchema);     //collection name provided
module.exports = productEnroll ;