const productModel = require('../model/ParticularProductSchema');

const productDetail = async({size,availableQty,image,price,color,product_id}) => {
    try{
        const productInfo = new productModel({
            size,
            availableQty,
            image,
            price,
            color,
            product_id
          });
        let storedData = await productInfo.save();
        return storedData;

    }catch(err){
        console.log(err)
    }

};





module.exports = {productDetail};