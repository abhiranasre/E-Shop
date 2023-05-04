const JWT = require('jsonwebtoken');
const Secret_Key = 'WT$hUIO9Sd@EvHG';

const checkUserRole = (req,res,next)=>{

    // console.log(req.headers)
    const token = req.headers.authorization;
    // console.log(token)
    if(!token){
        res.send("We need a token");
    }else{
        JWT.verify(token, Secret_Key,  (err, decoded)=>{
            if(err){
                res.json({auth:false, message:"failed to authenticate"})
            }else{
                const userType = decoded.type;
              if(userType === "user"){
                next();
              }
              else{
                res.status(401).send('unauthorized user')
              }
            }
        })
    }





}

module.exports = checkUserRole;