const express = require('express');

const router = express.Router();



router.get('/', (req,res) =>{

    // render ejs
    res.render('new.ejs')

})


module.exports = router