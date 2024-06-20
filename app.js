let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
const route = require("./routes/route")

let app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/roxiler").then(()=>{
    console.log("database connection OK")
})

app.use("/", route)
app.listen(5000)    // http://localhost:5000/

// Open http://localhost:5000/getdata after seeding to receive data in backend.