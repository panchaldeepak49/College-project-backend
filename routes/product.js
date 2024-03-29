
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');      // Uploads will be stored in the 'uploads' directory
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);     // Rename the file to include the current timestamp
    },
  });

  const upload = multer({ storage });

  

const express = require('express');
const router = express.Router();
const {postEnroll,getAllEnroll,postContact,getAllContacts,
  postHiring,getAllHiring,postSmtContacts,getAllSmtContacts,updateSmtContacts,deleteSmtContacts} = require("../Controller/product")
const {uploadFile} = require("../Controller/fileUpload")
const { postLogin } = require("../Controller/login")
const { postRegister } = require("../Controller/register")

router.route("/enroll/create").post(postEnroll);
router.route("/enroll/read").get(getAllEnroll);
router.route('/contactUs/create').post(postContact);
router.route("/contactUs/read").get(getAllContacts);
router.route('/hiring/create').post(postHiring);
router.route('/hiring/read').get(getAllHiring);
router.route('/upload').post(upload.single('file'),uploadFile);

router.route('/smt/createContacts').post(postSmtContacts);
router.route('/smt/readContacts').get(getAllSmtContacts);
router.route('/smt/updateContacts/:id').put(updateSmtContacts);
router.route('/smt/deleteContacts/:id').delete(deleteSmtContacts);
router.route('/smt/login').post(postLogin);
router.route('/smt/register').post(postRegister);


module.exports = router;