// require("dotenv").config();
// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
// require("./db/connect");
// const users=require("./models/userSchema");
// const cors=require("cors");
// const router=require("./routes/router");
// const port =8003;
// app.use(cors());
// app.use(express.json());
// app.use(router);
// app.listen(port,()=>{
//     console.log(`Server is running at port number ${port}`);
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
require("./db/connect");
const port = 8003;

// Use the cors middleware
app.use(cors());

app.use(express.json());
app.use(router);

// app.post('/signin',(req,res)=>{
//    users.create(req.body).then(Student=>res.json(Student)).catch(err=>res.json(err)) 
// })

app.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});
