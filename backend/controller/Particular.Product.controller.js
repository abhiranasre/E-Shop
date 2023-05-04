const particularPdtService = require('../service/ParticularProduct.service');

const productDetail = async(req,res) => {
    
try{
    const data = await particularPdtService.productDetail(req.body);
    res.status(201).send({success:true, data:data});
}
catch(error){
    console.log(error)
}

};


module.exports = {productDetail};