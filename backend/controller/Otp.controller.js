const otpService = require("../service/Otp.service");

const sendOTP = async (req, res) => {
  const { name, mobileNo} = req.body;
  const response = await otpService.sendOTP(name, mobileNo);

  res.status(200).send({ data: response });
};

const reSendOTP = async (req, res) => {
  const { name, mobileNo } = req.body;
  const response = await otpService.reSendOTP(name, mobileNo);

  res.status(200).send({ data: response });
};

const verifyOTP = async (req, res) => {
  const { name, otp } = req.body;
  const response = await otpService.verifyOTP(name, otp);

  res.status(200).send({ data: response });
};

module.exports = {
  sendOTP,
  reSendOTP,
  verifyOTP,
};