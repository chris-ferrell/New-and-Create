const express  = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
// importing router
const fruitRouter = require('./controller/fruitsRouter');

// middle ware
app.set('view engine', 'ejs');
app.use('/fruits/new', fruitRouter);







app.post('/fruits', (req,res) => {
    res.send('hi');
})

app.listen('3000', ()=> {
    console.log("listening...");
})