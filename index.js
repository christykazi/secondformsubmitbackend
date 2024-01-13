const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const mongoose = require("mongoose")
app.use(express.json())

const bcrypt = require("bcryptjs")

const mongoUrl = "mongodb://127.0.0.1:27017/secondformsubmit"


mongoose.connect(mongoUrl,)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {  
    console.error("Error in backend:", error);

    if (error.name === 'ValidationError') {
      console.error("Validation Error Details:", error.errors);
    } 

    res.status(500).send({ status: "error", error: error.message });
  });

require("./userDetails")


const User = mongoose.model("UserInfo");

app.post("/register", async(req,res) => {
const {fname, lname, email, password} = req.body

/* 
console.log("Received Data:", fname, lname, email, password); */


const encryptedpassword = await bcrypt.hash(password, 10)

console.log("Encrypted Password:", encryptedpassword);
try {
    const oldUser = await User.findOne({ email })

    if (oldUser){
     return   res.json({error: "user Exists"})
    }
    await User.create({
        fname,
        lname,
        email,
        password:  encryptedpassword,
    })
    res.send({status: "ok"})
} catch (error) {

    // console.error("Error creating user:", error);

    res.send({staus: "error"})
}
})

app.listen(7001, () => {
    console.log("server started")
})