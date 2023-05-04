const mongoose = require('mongoose');

const product = new mongoose.Schema({

    type:{type:String,lowercase:true,required:true},
    product_category:{type:String,lowercase:true,required:true},
    brand:{type:String,lowercase:true,required:true},
    description:{type:String,lowercase:true,required:true},
    category_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'categories',
    },
    isDeleted:{type:String, default:"false"},
    createdBy:{type:String, default:"admin"}

},
{timestamps:true});

module.exports = mongoose.model('allProduct', product);

// const mongoose = require('mongoose');

// const Product = new mongoose.Schema({
//     category:{type:String, required:true},
//     brand:{type: String, required:true},
//     slug:{type: String, required:true, unique:true},
//     desc:{type:String, required:true},
//     size:{type:String, required:true},
//     availableQty:{type:Number, required:true},
//     image:{type:String, required:true},
//     price:{type: Number, required:true},
//     color:{type: String, required:true}
// })

// module.exports = mongoose.model('productSchema', Product);