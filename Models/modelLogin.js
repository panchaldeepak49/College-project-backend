const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    }
   
})

const collectionLogin = new mongoose.model("Product4",productSchema);     //collection name provided
module.exports = collectionLogin ;