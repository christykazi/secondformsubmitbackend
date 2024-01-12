const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())

const mongoUrl = "mongodb://127.0.0.1:27017/crixianna"

mongoose.connect(mongoUrl, 
    {useNewUrlParser: true,} )
.then(() =>{
    console.log("connected to database")
} )
.catch((e) => console.log(e))

app.listen(5000, () => {
    console.log("server started")
})