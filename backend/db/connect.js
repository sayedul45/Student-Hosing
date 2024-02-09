const mongoose = require("mongoose");
// const DB = "mongodb+srv://sayedul45:sayedul45@cluster0.snltbmt.mongodb.net/student?retryWrites=true&w=majority"
const DB="mongodb+srv://sayedulislam1586:sayedul45@database.bxi6vgk.mongodb.net/Student?retryWrites=true&w=majority";
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Mongodb Started")).catch((error) => console.log(error.message));