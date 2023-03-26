const express  = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
// importing router
const fruitRouter = require('./controller/fruitsRouter');

// middle ware
app.set('view engine', 'ejs');
app.use('/fruits/new', fruitRouter);
// new miiddleware
app.use((req,res,next) => {
    console.log('I run for all routes');
    next();
})
// accessing the data of the middleware function 
app.use(express.urlencoded({ extended:false}));






app.post('/fruits', (req,res) => {
    console.log(req.body);
    res.send('data received');
})

app.listen('3000', ()=> {
    console.log("listening...");
})