const express = require('express');
const router = express.Router();

require('../db/orderconn');
const Address = require("../model/orderUserSchema");





router.post('/products/Cart/Delivery', async (req, res) => {

    const {product, quantity, name, phone, street, city, pincode, country } = req.body;
    
    if(!product || !quantity || !name || !phone || !street || !city || !pincode || !country ) {
        return res.status(422).json({ error: "please fill the field property"});
    }

    // try {

    //     const userExist = await User.findOne({email : email});

    //     if (userExist) {
    //         return res.status(422).json({ error: "Email already Exist"});
    //     } else if(password != cpassword ) {
    //         return res.status(422).json({ error: "password is not maching"});
    //     } else {
    const address = new Address({product, quantity, name, phone, street, city, pincode, country });
            // yeha pe
    await address.save();

    res.status(201).json({ message : "user registered successfully"});
        

    
        
    // } catch (err) {
    //     console.log(err);
    // }
 
});    


module.exports = router;