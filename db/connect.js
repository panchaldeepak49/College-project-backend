const mongoose = require ('mongoose');

//uri = 'mongodb://0.0.0.0:27017/wscube';          //database name provided(wscube)
uri = 'mongodb+srv://panchaldeepak49:Deepak%4012345@cluster1.ebo66nu.mongodb.net/' 
                           //database name provided(cluster1)---Mongodb atlas cloud service used here

const connectDB = ()=>{
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('database connection done'))
    .catch((err)=>console.log(err));
}

module.exports = connectDB;                      //Its existence only in index.js 