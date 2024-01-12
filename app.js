const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())

const mongoUrl = "mongodb://127.0.0.1:27017/secondformsubmit"

mongoose.connect(mongoUrl, 
    {useNewUrlParser: true,} )
.then(() =>{
    console.log("connected to database")
} )
.catch((e) => console.log(e))

require("./userDetails")


const User = mongoose.model("UserInfo");

app.post("/register", async(req,res) => {
const {fname, lname, email, password} = req.body
try {
    await User.create({
        fname,
        lname,
        email,
        password,
    })
    res.send({status: "ok"})
} catch (error) {
    res.send({staus: "error"})
}
})

app.listen(7000, () => {
    console.log("server started")
})