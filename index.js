const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');             //Import the cors middleware
const app = express()
const connectDB = require('./db/connect')
const product_routes = require('./routes/product')


connectDB();                               //db connection

app.use(bodyParser.urlencoded ({
    extended : false
}))
app.use(express.json());
app.use(cors());

//middleware or to set router
app.use('/api',product_routes)


app.get('/',(req,res)=>{
    res.send('Hello world ');
})

app.listen(5000,()=>{
    console.log('Server is working...')
});

