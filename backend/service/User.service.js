const UserModel = require("../model/UserSchema");
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const otpService = require("../service/Otp.service");

const signUp = async ({ name, mobileNo, email,password }) => {
  try {
    const user = new UserModel({
      name,
      mobileNo,
      email,
      password,
      status: "PENDING",
    });

    const SALT = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, SALT);
    const savedUser = await user.save();
    await otpService.sendOTP(name, mobileNo);
    const token = await JWT.sign({name:savedUser.name, id:savedUser._id, role:savedUser.role, status:savedUser.status},process.env.Secret_Key);
    return {savedUser};
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const login = async({email,password}) =>{
  try{
      
    const user = await UserModel.findOne({email});
    if(user){
    // console.log('p', password);
    // console.log('u', user.password);
    let checkPassword = await bcrypt.compare(password, user.password);
    if(checkPassword){
    // console.log(user.status);
    // return;
    if(user.status === 'VERIFIED'){

    const token = await JWT.sign({email: user.email, role:user.role, user_id: user._id, status:user.status}, process.env.Secret_Key, {expiresIn:'7d'});
    return{success:true, name:user.name, token};
    }
  }
  else{
    return {success:false, message:'password do not match'}
  }
  }
  else{
    return {success:false, message:"user not found"}
  }
  }catch(error){
    console.log(error)
    throw error;
  }
}

module.exports = {
  signUp,
  login
};