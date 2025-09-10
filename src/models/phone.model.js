const mongoose = require("mongoose");

const phoneSchema = new  mongoose.Schema({
    phoneName : String,
    phonePrice : String
})

const  phoneModel = mongoose.model("phone",phoneSchema);

module.exports = phoneModel;