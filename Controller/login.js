const collectionLogin = require('../Models/modelLogin');
const jwt = require("jsonwebtoken");
const secretKey = "secretkey";

const postLogin = async(req,res)=>{
    const{email,password} = req.body
    const existingProduct = await collectionLogin.findOne({email: email});     //check on emailId 
    //console.log(existingProduct);
    if(existingProduct){
        if(password === existingProduct.password){
            const token = jwt.sign({ email: email }, secretKey);
        res.status(200).json({
            success: true,
            message: 'Login successfull',
            token : token
        })
       }else{
        res.status(404).json({
            success: false,
            message: 'Incorrect password'
        })
        }


    }else {
        res.status(400).json({
            success: false,
            message:"User not registered"
        })
} }  

module.exports = { postLogin };
