const mongoose = require('mongoose');


const orderUserSchema = new mongoose.Schema({
    
    
    name : {
        type : String,
        required : true
    },
    phone: {
        type : Number,
        required : true
    },
    street : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    pincode : {
        type : Number,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }


});


// collection creation
const Address = mongoose.model('ADDRESS', orderUserSchema);


module.exports = Address;
