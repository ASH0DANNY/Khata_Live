const catchErrors = require("../middleware/catchErrors");
const ErrorHandler = require("../middleware/errorHandler");
const Vendors = require("../models/model");
const { pushHistory } = require("./history");

exports.newTransaction = catchErrors(async (req, res, next) => {
  let vendor = await Vendors.findById(req.params.id);
  const { amount, desc, type } = req.body;

  if (!vendor) {
    return next(new ErrorHandler("Vendor Not Found!", 404));
  }

  //Updating Balance
  if (type === "credit") {
    vendor.balance += Number(amount);
  }
  if (type === "debit") {
    vendor.balance -= Number(amount);
  }

  //Pushing History in Transaction
  vendor.transaction.push({
    trans_type: type,
    amount: amount,
    desc: desc,
    date: Date.now(),
  });

  let Vid = req.params.id;
  const newHistory = {
    vendor_name: vendor.name,
    trans_type: type,
    trans_amount: amount,
    trans_desc: desc,
    public_id: Vid,
  };

  await pushHistory({ newHistory });

  //After all alter => saving changes
  await vendor.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    vendor,
  });
});
