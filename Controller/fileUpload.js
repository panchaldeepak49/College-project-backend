// const express = require('express');
// const app = express();
//const multer = require('multer');


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/'); // Uploads will be stored in the 'uploads' directory
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname); // Rename the file to include the current timestamp
//     },
//   });

  //const upload = multer({ storage });
  

  const uploadFile = async(req,res)=>{
    //const product = await upload.single('document');
    //console.log(req.file);
    if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No file uploaded',
        });
      }

    const uploadedFileUrl = `/uploads/${req.file?.filename}`;

    res.status(200).json({ 
        success: true,
        message: 'File uploaded successfully',
        url: uploadedFileUrl,
        //product
    });
  }

  module.exports = { uploadFile };