const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const mongoose = require("mongoose")
app.use(express.json())

const mongoUrl = "mongodb://127.0.0.1:27017/secondformsubmit"

mongoose.connect(mongoUrl, {  useUnifiedTopology: true })
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
console.log("Received Data:", fname, lname, email, password);
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