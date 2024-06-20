let express = require("express")
const {getData} = require("../controllers/transcont")
let route = new express.Router()
route.get("/getdata", getData)

module.exports = route