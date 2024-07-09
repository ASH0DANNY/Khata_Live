const catchErrors = require("../middleware/catchErrors");
const ErrorHandler = require("../middleware/errorHandler");
const VendorSchema = require("../models/model");

exports.createVendors = catchErrors(async (req, res, next) => {
  const vendors = await VendorSchema.create(req.body);

  res.status(200).json({
    success: true,
    vendors,
  });
});

exports.getAllVendors = catchErrors(async (req, res, next) => {
  const Vendors = await VendorSchema.find();

  if (!Vendors) {
    return next(new ErrorHandler("Product Not Found!", 404));
  }

  res.status(200).json({
    // message: "Route is working fine."
    success: true,
    Vendors,
  });
});

exports.getVendorDetails = catchErrors(async (req, res, next) => {
  const vendorDetails = await VendorSchema.findById(req.params.id);
  
  if (!vendorDetails) {
    return next(new ErrorHandler("Product Not Found!", 404));
  }

  res.status(200).json({
    // message: "Route is working fine."
    success: true,
    vendorDetails,
  });
});
