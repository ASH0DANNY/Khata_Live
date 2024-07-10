const catchErrors = require("../middleware/catchErrors");
const ErrorHandler = require("../middleware/errorHandler");
const User = require("../models/userModel");

exports.login = catchErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = (await (password === user.password)) ? true : false;

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  console.log("password matched");
  res.status(200).json({
    success: true,
  });
});

exports.register = catchErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.create({ email, password });

  res.status(200).json({
    success: true,
    user,
  });
});
