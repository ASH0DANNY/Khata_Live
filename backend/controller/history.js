const catchErrors = require("../middleware/catchErrors");
const ErrorHandler = require("../middleware/errorHandler");
const transHistory = require("../models/historyModel");
const Vendor = require("../models/model");

exports.getHistory = catchErrors(async (req, res, next) => {
  const History = await transHistory.find();

  if (!History) {
    return next(new ErrorHandler("Vendor Not Found!", 404));
  }

  res.status(200).json({
    success: true,
    History,
  });
});

exports.pushHistory = async ({ newHistory }) => {
  const history = await transHistory.create({
    vendor_name: newHistory.vendor_name,
    trans_type: newHistory.trans_type,
    trans_amount: newHistory.trans_amount,
    trans_desc: newHistory.trans_desc,
    desc: newHistory.trans_desc,
    public_id: newHistory.public_id,
  });
};

// exports.getSingleHistory = catchErrors(async (req, res, next) => {
//   const vendor = await Vendor.findById(req.params.id);

//   if (!vendor) {
//     return next(new ErrorHandler("Vendor Not Found!", 404));
//   }

//   // const transaction = vendor.transaction;
//   res.status(200).json({
//     success: true,
//     vendor,
//   });
// });
