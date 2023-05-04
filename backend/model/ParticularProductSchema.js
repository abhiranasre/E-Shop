const mongoose = require('mongoose');

const singleProduct = new mongoose.Schema({

    size:{type:[mongoose.Schema.Types.Mixed],uppercase:true,required:true},
    availableQty:{type:Number,required:true},
    image:{type:[mongoose.Schema.Types.Mixed], required:true},
    // price:{type:Number,required:true},
    price:{type:[mongoose.Schema.Types.Mixed], required:true},
    // color:{type:String,required:true},
    color:{type:[mongoose.Schema.Types.Mixed], required:true},
    product_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'allproducts',
        },
    isDeleted:{type:String, default:"false"},    
    createdBy:{type:String, default:"admin"}

},
{timestamps:true});

module.exports = mongoose.model('particularProducts', singleProduct);

