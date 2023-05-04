const mongoose = require('mongoose');

const category = new mongoose.Schema({

    category:{type:String,lowercase:true,required:true},
    isDeleted:{type:Boolean, default:false},
    createdBy:{type:String, default:"admin"}
},
{timestamps:true});

module.exports = mongoose.model('category', category);