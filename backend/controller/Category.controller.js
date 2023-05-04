const categoryService = require('../service/Category.service');

const createCategory = async(req,res) => {
try{
    const categoryData = await categoryService.createCategory(req.body);
    


    res.status(201).send({success:true, data:categoryData});
}
catch(error){
    console.log(error)
}

};


module.exports = {createCategory};