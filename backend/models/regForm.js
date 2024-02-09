const mongoose = require("mongoose");
const regData = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    bod:{
    type: String
}
    ,
    email: {
    type: String,
    required: true,
    unique: true
},
    mobile: {
    type: Number,
    required: true,
    unique: true
},
    occupation: {
    type: String,
    default: 'Student'
},
    idType: {
    type: String,
    required: true
},
    idNo: {
    type: Number,
    required: true,
    unique: true
},
    issueAuthor: {
    type: String
},
    state: {
    type: String
},
    date: {
    type: String
},
    expDate: {
    type: String
}
});

const registered = new mongoose.model("registration", regData);
module.exports = registered;