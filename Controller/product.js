const productEnroll = require('../Models/enroll');
const productContact = require('../Models/contact');
const productHiring = require('../Models/hiring');
const productSmtContacts = require('../Models/smtContact.js')


const postEnroll = async(req,res)=>{
    const existingProduct = await productEnroll.findOne({email: req.body.email});//check on emailId 

    if(existingProduct){
        res.status(400).json({
            success: false,
            message: 'This email already exist, please choose other.'
        })
    }else {
    const product = await productEnroll.create(req.body);
    //console.log(req.body)
    res.status(200).json({
        success :true,
        product
    })
}   
}

const getAllEnroll = async(req,res)=>{
    const products = await productEnroll.find();
    res.status(200).json({
        success :true,
        products
    })
}

///////////////////////////////////////////////////////////////////////////

const postContact = async(req,res)=>{
    const existingProduct = await productContact.findOne({email: req.body.email}); //check on emailId

    if(existingProduct){
        res.status(400).json({
            success: false,
            message: 'This email already exist ,please choose other'
        })
    }else{
    const product1 = await productContact.create(req.body);
    res.status(200).json({
        success :true,
        product1
    })   
   }
  }


const getAllContacts = async(req,res)=>{
    const products1 = await productContact.find();
    res.status(200).json({
        success :true,
        products1
    })
}

////////////////////////////////////////////////////////////////////////////////

const postHiring = async(req,res)=>{
    const existingProduct = await productHiring.findOne({email: req.body.email}); //check on emailId

    if(existingProduct){
        res.status(400).json({
            success: false,
            message: 'This email already exist ,please choose other'
        })
    }else{
    const product2 = await productHiring.create(req.body);
    res.status(200).json({
        success :true,
        product2
    })   
   }
  }

const getAllHiring = async(req,res)=>{
    const products2 = await productHiring.find();
    res.status(200).json({
        success :true,
        products2
    })
}
////////////////////////////////////////////////////////////////////////////////////////


const postSmtContacts = async(req,res)=>{
    const existingProduct = await productSmtContacts.findOne({email: req.body.email});//check on emailId 

    if(existingProduct){
        return res.status(400).json({
            success: false,
            message: 'This email already exist, please choose other.'
        })
    }else {
    const product3 = await productSmtContacts.create(req.body);
    //console.log(req.body)
    return res.status(200).json({
        success :true,
        product3
    })
}   
}

//Controller code 

const updateSmtContacts = async(req,res)=>{
    let availableUser = await productSmtContacts.findById(req.params.id);

    if(availableUser){
     availableUser = await productSmtContacts.findByIdAndUpdate(req.params.id,req.body,
        {new:true,
        useFindAndModify: false,
        runValidators: true
        })
      return res.status(200).json({
        success :true,
        availableUser,
        message : 'User updated successfully'
    })

   }else {
        return res.status(404).json({
        success: false,
        message: 'This user is not present'
    })
   }}

   //Controller code 
   const deleteSmtContacts = async(req,res)=>{
    try{
    let availableUser = await productSmtContacts.findById(req.params.id);
    if(!availableUser){
        return res.status(404).json({
            success :false,
            message : "User not found."
        })

    }else{
    // await availableUser.remove();
    await productSmtContacts.findByIdAndRemove(req.params.id); 
       return res.status(200).json({
        success :true,
        message : "User is deleted."
    })
   }
   }catch(error){
    console.error(error);
    return res.status(500).json({
        success: false,
        message: "Internal Server Error."
    });
   }
  }

//Controller code 

const getAllSmtContacts = async(req,res)=>{
    const products3 = await productSmtContacts.find();
    return res.status(200).json({
        success :true,
        products3
    })
}

module.exports = {postEnroll,getAllEnroll,postContact,getAllContacts,postHiring,getAllHiring,
    postSmtContacts,getAllSmtContacts,updateSmtContacts,deleteSmtContacts};