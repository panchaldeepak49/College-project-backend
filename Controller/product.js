const productEnroll = require('../Models/enroll');
const productContact = require('../Models/contact');
const productHiring = require('../Models/hiring');


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

module.exports = {postEnroll,getAllEnroll,postContact,getAllContacts,postHiring,getAllHiring};