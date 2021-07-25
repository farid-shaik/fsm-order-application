const express = require('express');
const router = express.Router();


require('../db/orderconn');
const Order = require("../model/orderSchema");






// order details

router.post('/products/Cart/', async (req, res) => {

    const {products, name, phone, street, city, pincode, country } = req.body;
        
    if(!products || !name || !phone || !street || !city || !pincode || !country ) {
        return res.status(422).json({ error: "please fill the field property"});
    }
    
        // try {
    
        //     const userExist = await User.findOne({email : email});
    
        //     if (userExist) {
        //         return res.status(422).json({ error: "Email already Exist"});
        //     } else if(password != cpassword ) {
        //         return res.status(422).json({ error: "password is not maching"});
        //     } else {
    const order = new Order({products, name, phone, street, city, pincode, country });
    // yeha pe
    await order.save();
    
    res.status(201).json({ message : "user registered successfully"});



});

module.exports = router;