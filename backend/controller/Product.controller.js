const productService = require('../service/Product.service');
const getPrd = require('../model/ProductSchema')

const addProduct = async(req,res) => {
try{
    const productData = await productService.addProduct(req.body);
    res.status(201).send({success:true, data:productData});
}
catch(error){
    console.log(error)
}

};

const getProduct = async(req,res)=>{
    // console.log("Hii", req.query)

    const productFound = await productService.getProduct(req.query.cat);
    // console.log(productFound);
    res.status(200).send(productFound);
}


module.exports = {addProduct, getProduct};