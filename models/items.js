const mongoose = require("mongoose");
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type:string,
        required:true
    },
    price:{
        type:number,
        required:true
    }
},{timestamps:true})


const Item = mongoose.model("Item", itemSchema)

module.exports = Item;