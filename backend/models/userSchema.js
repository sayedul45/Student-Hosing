const mongoose =require("mongoose");
const userSchema=new mongoose.Schema({
    fname:{
    type:String,
    required:true
    },

    lname:{
    type:String,
    required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
});

const users=new mongoose.model("users",userSchema);
module.exports=users;