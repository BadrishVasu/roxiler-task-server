let transmodel = require("../models/transaction")

let getData = async(req,res)=>{
    try{
        let data=await transmodel.find()
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getData}