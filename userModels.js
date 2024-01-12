const mongoose = require("mongoose")

const userModelsScehma = new mongoose.Schema(
    {
fname: String,
lname: String,
email: string,
password: string
    },
    {
collection: "formsubmit"
    }
)

mongoose.model("formsubmit", userModelsScehma)