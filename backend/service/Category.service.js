const categoryModel = require('../model/CategorySchema');

const createCategory = async({category}) => {

   
    try{
        const catData = new categoryModel({
            category
          });
        let newCat = await catData.save();
       return newCat;

    }catch(err){
        console.log(err)
    }

};



module.exports = {createCategory};
