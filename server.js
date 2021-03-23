const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const config = require('config');
const cors = require('cors');
// const env = require("dotenv");

//bodyparser middleware
app.use(bodyParser.json());

//cross platform adapability
app.use(cors())


// route required
const items = require('./routes/api/items');

//DB connection
const db = config.get("mongoURI");


//connect to mongo
mongoose.connect(db, {
     useNewUrlParser: true,
     useUnifiedTopology: true ,
     useCreateIndex: true
})
.then(()=>  console.log('mongoose connected...'))
.catch(err => console.log(err));


app.use('/api/items', items);


// serve static assets  if in production
if(process.env.NODE_ENV === 'production') {
     // serve static folder
     //   app.use(express.static('client/mern-stack/build'));

       app.use(express.static(path.join(__dirname, 'client/build')))

       app.get('*', (req, res)=> {
            res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
       } ); 
     }     


const port = process.env.PORT || 6600;

app.listen(port, ()=> console.log(`server started on ${port}`)); 
