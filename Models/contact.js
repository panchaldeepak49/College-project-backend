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
    subject : {
        type: String,
        required: true,
    },
    message : {
        type: String,
        required: true,
    }
})

const productContact = new mongoose.model("Product1",productSchema);     //collection name provided
module.exports = productContact ;                        //It is getting transferred to controller part only