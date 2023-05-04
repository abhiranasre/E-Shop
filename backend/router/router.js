//----------Create by ROHIT SINGH MEHRA ----------//

const express = require('express');
const router = express.Router();


//---------------------Importing from controllers---------------------//

const addCategory = require('../controller/Category.controller');
const productController = require('../controller/Product.controller');
const productDetail = require('../controller/Particular.Product.controller');
const otpController = require("../controller/Otp.controller");
const userController = require("../controller/User.controller");
const singleProductController = require('../controller/Find.product.controller');
const pincodeController = require('../controller/Pincode.controller')





//----------------------Imports ends here-----------------------//



//---------------------Routes starts here---------------------//

//===================POST REQUEST===================//
router.post('/category',addCategory.createCategory);
router.post('/addProduct', productController.addProduct);
router.post('/addProductDetails', productDetail.productDetail);
router.post("/", otpController.sendOTP);
router.post("/resendOtp", otpController.reSendOTP);
router.post("/verifyOtp", otpController.verifyOTP);
router.post("/signUp", userController.signUp);
router.post('/login',userController.login);
//===================POST REQUEST ENDS=============//

//=================GET REQUEST STARTS============//

router.get('/products/', productController.getProduct);
router.get('/singleProduct/:id',singleProductController.FindPD)
router.get('/checkPincode',pincodeController.CheckPin)



//================GET REQUEST ENDS============//

//---------------------Routes ends here----------------------//


module.exports = router;