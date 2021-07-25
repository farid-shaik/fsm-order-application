const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    products : {
        type : String,
        required : true
    },
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


const Order = mongoose.model('ORDER', orderSchema);

module.exports = Order;