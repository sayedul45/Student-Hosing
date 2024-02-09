const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const FormData = require("../models/formdata");
const Data = require("../models/regForm");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kadjkljaddjdfkjffdjkdffjkf34975498753sjdd";

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

router.post("/sign-up", async (req, res) => {
    console.log(req.body);

    const { fname, lname, email, password } = req.body;


    if (!fname || !lname || !email || !password) {
        return res.status(422).json({ error: "fillup all the data" });
    }

    users.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "user already exist" });
        }

        const userdata = new users({ fname, lname, email, password });

        userdata.save().then(() => {
            res.status(201).json({ message: "registration succesfull" });
            // console.log(userdata);
        }).catch((err) => { res.status(500).json({ error: "failed to registered" }) })

    }).catch((err) => { console.log(err) });



});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;


    // return res.status(200);
    if (!email || !password)
        res.status(400).json({ error: "please fillup the data" });

    try {

        const userlogin = await users.findOne({ email: email });


        if (userlogin) {

            if ((password != userlogin.password)) {
                console.log('object')
                res.status(400).json({ error: "wrong password" });
            }
            else
                res.status(201).json({ message: "password matched" });
        }
        else {
            console.log('object1')
            res.status(400).json({ error: "invalid details" });
        }

    } catch (error) {
        res.status(400).json({ error: "invalid details" })
    }
});
router.post('/fees', async (req, res) => {
    try {
        console.log(req.body)
        const formData = new FormData(req.body);
        // console.log(formData + "😊😊😊😊");
        

        const d = await formData.save()
        return res.status(200).json(d);
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
});

router.post('/apply-now', async (req, res) => {
    try {
        console.log(req.body)
        const formData = new Data(req.body);

        const d = await formData.save()
        return res.status(201).json({ error: "Data added successfully" });
    } catch (error) {
        console.log(error)
        return res.status(501).json(error)
    }
});

module.exports = router;