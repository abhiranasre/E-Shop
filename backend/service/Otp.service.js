const { CourierClient } = require("@trycourier/courier");
const otpGenerator = require("otp-generator");

const OTPModel = require("../model/OtpSchema");
const UserModel = require("../model/UserSchema");


const courier = CourierClient({
  authorizationToken: process.env.COURIER_TOKEN,
});

const sendOTP = async (name, mobileNo) => {
  try {
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets:false
    });

    await addNewOTP(otp, 15, name, "PENDING");
    await sendVerificationMessage(
      {
        name,
        otp,
      },
      mobileNo
    );
    return {
      success: true,
      message: "OTP sent successfully",
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const reSendOTP = async (name, mobileNo) => {
  try {
    await rejectPendingOTP(name);
    return await sendOTP(name, mobileNo);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const verifyOTP = async (name, otp) => {
  try {
    const validOTP = await OTPModel.findOne({
      otp,
      name,
      status: "PENDING",
      expireIn: { $gte: new Date().getTime() },
    });

    if (validOTP) {
      await OTPModel.updateOne(
        { _id: validOTP._id },
        { $set: { status: "CONFIRMED" } }
      );
      await UserModel.updateOne({ name }, { $set: { status: "VERIFIED" } });
      return {
        success: true,
        message: "User verified",
      };
    }
    throw new Error("Invalid OTP");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sendVerificationMessage = (params, mobileNo) => {
  return courier.send({
    message: {
      to: {
        data: params,
        phone_number: mobileNo,
      },
      content: {
        title: "OTP Verification",
        body: "Hi {{name}},\nYour OTP for wearrIt.com is {{otp}}.",
      },
      routing: {
        method: "single",
        channels: ["sms"],
      },
    },
  });
};

const addMinutesToDate = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000);
};

const addNewOTP = (otp, expirationTime, name, status) => {
  const otpModel = new OTPModel({
    otp,
    expireIn: addMinutesToDate(new Date(), expirationTime),
    name,
    status,
  });
  return otpModel.save();
};

const rejectPendingOTP = (name) => {
  return OTPModel.updateMany(
    { name, status: "PENDING" },
    { $set: { status: "REJECTED" } }
  );
};

module.exports = {
  sendOTP,
  reSendOTP,
  verifyOTP,
};