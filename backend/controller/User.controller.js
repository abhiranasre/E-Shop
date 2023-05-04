const userService = require("../service/User.service");

const signUp = async (req, res) => {
  const user = await userService.signUp(req.body);

  res.status(201).send({ meta: 200, user:user });
};


const login = async(req,res) =>{
  const loginUser = await userService.login(req.body);
  res.send(loginUser)
}

module.exports = {
  signUp,
  login
};