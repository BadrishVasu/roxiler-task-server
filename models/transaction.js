let mongoose = require("mongoose")
let transch = new mongoose.Schema({
    "_id": Number,
    "title": String,
    "price": mongoose.Types.Decimal128,
    "description": String,
    "category": String,
    "image": String,
    "sold": Boolean,
    "dateOfSale": String
})

let transmodel = mongoose.model("transaction", transch)
module.exports = transmodel