const collectionLogin = require('../Models/modelLogin');


const postRegister = async(req,res)=>{
    const{email,password} = req.body
    const existingUser = await collectionLogin.findOne({email: req.body.email});//check on emailId 
    //console.log(email);

    if(existingUser){
        return res.status(400).json({
            success: false,
            message: 'User already registered'
            
        })
        
    }else {

    const newUser = new collectionLogin({
        email: email,
        password: password // Note: In a real-world scenario, you should hash the password before saving it
    });

    await newUser.save();
    return res.status(201).json({
        success: true,
        message: 'User registered successfully'
    });
} 
}  




module.exports = { postRegister };