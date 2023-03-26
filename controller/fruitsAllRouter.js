const express = require('express');

const router = express.Router();

router.get('/', (req,res)  => {

    res.render('fruit_show.ejs', {
        fruits:fruits
    })


})




module.exports = router;