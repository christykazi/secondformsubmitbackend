const mongoose = require("mongoose")

const userDetailsScehma = new mongoose.Schema(
    {
fname: String,
lname: String,
email: String,
password: String,
    },
    {
collection: "UserInfo"
    }
)

mongoose.model("UserInfo", userDetailsScehma)