
//Configuration of Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Data = new Schema({
    item:String
})

module.exports=mongoose.model('data', Data);