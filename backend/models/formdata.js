const mongoose = require('mongoose');
const FormDataSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Name should be provided"]
    },
    email:
    {
        type: String,
        required: [true, 'Email should be provided'],
        unique: true
    },
    hallOfResidence: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
    },
    zipCode: {
        type: String
    },
    nameOnCard:{
        type:String,
        required:true,
    } ,
    creditCardNumber: {
        type: String,
        required: true,
        unique: true
    },
    expMonth:{
        type:String
    },

    expYear: {
        type:String
    },
    reference: {
        type:String
    }
});
const FormData = new mongoose.model("forms", FormDataSchema);
module.exports = FormData;