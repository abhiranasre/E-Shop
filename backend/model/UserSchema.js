const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// const SALT = 10;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNo: {
        type: String,
        required: true,
        trim: true,
      },
    email: {
        type: String,
        required: true,
        trim: true,
      },
    password: {
        type: String,
        required: true,
        trim: true,
      },
    role:{
      type:String,
      default:'user'
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save", function (next) {
//   var user = this;

//   if (!user.isModified("password")) return next();

// });

module.exports = mongoose.model("user", userSchema);