const catchErrors = require("../middleware/catchErrors");
const ErrorHandler = require("../middleware/errorHandler");
const myBalance = require("../models/balanceModel");

exports.getMyBalance = catchErrors(async (req, res, next) => {
  const balance = await myBalance.find();

  if (!balance) {
    return next(new ErrorHandler("Balance Not Found!", 404));
  }

  res.status(200).json({
    success: true,
    balance,
  });
});

// exports.createBalance = catchErrors(async (req, res, next) => {
//   const balance = await myBalance.create(req.body);

//   res.status(200).json({
//     success: true,
//     balance,
//   });
// });

exports.createBalance = catchErrors(async (req, res, next) => {
  const balance = await myBalance.findById("667eecf881859cde7ead03bf");

  const { newBalance, transType } = req.body;

  //credit to vendor => sub and debit to vendor => add to my balance
  if (transType === "credit") {
    balance.my_balance -= Number(newBalance);
  }
  if (transType === "debit") {
    balance.my_balance += Number(newBalance);
  }

  await balance.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    balance,
  });
});

exports.updateMyBalance = async ({ newBalance }) => {
  const balance = await myBalance.find();

  balance.my_balance += Number(newBalance);
  await balance.save({ validateBeforeSave: false });
};
