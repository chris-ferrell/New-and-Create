const express  = require('express');
const app = express();
const cors = require('cors');

const {fruits} = require('./models/fruits.js');




app.use(cors())
// importing router
const fruitRouter = require('./controller/fruitsRouter');
const fruitAllRouter = require('./controller/fruitsAllRouter');

// middle ware
app.set('view engine', 'ejs');
app.use('/fruits/new', fruitRouter);
app.use('/fruit', fruitAllRouter);
// new miiddleware
app.use((req,res,next) => {
    console.log('I run for all routes');
    next();
})
// accessing the data of the middleware function 
app.use(express.urlencoded({ extended:false}));






app.post('/fruits', (req,res) => {
    if(req.body.readToEat === 'on') {
        req.body.readToEat = true;

    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    console.log(fruits);
    res.redirect('/fruit');

})

app.listen('3000', ()=> {
    console.log("listening...");
})