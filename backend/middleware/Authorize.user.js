const JWT = require('jsonwebtoken');
const Secret_Key = 'WT$hUIO9Sd@EvHG';
const UserModel = require("../model/UserSchema");

const  verifyJWT = async (req,res,next)=>{
// console.log(req.headers)
    const token = req.headers.authorization;
    // console.log(token)
    if(!token){
        res.send("We need a token");
    }else{
        JWT.verify(token, Secret_Key, async (err, decoded)=>{
            if(err){
                res.json({auth:false, message:"failed to authenticate"})
            }else{
                const id = decoded.id;
                const checkId= await UserModel.findById({_id: id})  
                if(!checkId){
                return res.send({message:'invalid token'});
                }
                next()
            }
        })
    }
};

module.exports = verifyJWT;