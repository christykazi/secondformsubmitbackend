const express = require("expree")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())



mongoose.connect(mongourl, {useNewUrlParser: true,} )