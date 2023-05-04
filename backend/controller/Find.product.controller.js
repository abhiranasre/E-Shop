const productService = require('../service/Product.service');

const FindPD = async (req,res)=>{
        try{
            let product = await productService.findProductById(req.params.id);
            res.status(200).send(product);

            
        }catch(error){
            console.log(error);
            throw error;
        }



    //   FindSingle.findById(req.params.id, (err,result)=>{
    //     if(err){
    //         res.status(404).send({message:"Product Not Found"});
    //     }
    //     res.send(result)
    };

module.exports = {FindPD}