const productModel = require('../model/ProductSchema');

const addProduct = async ({ type,
    product_category,
    brand,
    description,
    category_id }) => {

    try {
        const product = new productModel({

            type,
            product_category,
            brand,
            description,
            category_id
        });
        let newProduct = await product.save();
        return newProduct;

    } catch (err) {
        console.log(err)
    }

};

const getProduct = async (data) => {
    let query = {
        "product_category": data
    }

    let pipeline = [
        { $match: query },
        {
            $lookup: {
                from: "particularproducts",
                localField: "_id",
                foreignField: "product_id",
                as: "product_details"
            }
        },
        { $unwind: "$product_details" },
        {
            $project: {
                _id: 1,
                product_category: 1,
                brand: 1,
                description: 1,
                category_id: 1,
                "product_details._id": 1,
                "product_details.size": 1,
                "product_details.availableQty": 1,
                "product_details.image": 1,
                "product_details.color": 1,
                "product_details.price": 1,

            }
        }
    ]

    const info = await productModel.aggregate([pipeline])

    return { info };



};


const findProductById = async (id) => {
    try {
        let query = {
            "id": id.id
        }

        let pipeline = [
            { $match: query },
            {
                $lookup: {
                    from: "particularproducts",
                    localField: "_id",
                    foreignField: "product_id",
                    as: "product_details"
                }
            },
            { $unwind: "$product_details" },
            {
                $project: {
                    _id: 1,
                    product_category: 1,
                    brand: 1,
                    description: 1,
                    category_id: 1,
                    "product_details._id": 1,
                    "product_details.size": 1,
                    "product_details.availableQty": 1,
                    "product_details.image": 1,
                    "product_details.color": 1,
                    "product_details.price": 1,

                }
            }
        ]
        let data = await productModel.aggregate([pipeline]);
        return {data};

    } catch (error) {
        console.log(error);
        throw error;
    }
};


module.exports = { addProduct, getProduct, findProductById };