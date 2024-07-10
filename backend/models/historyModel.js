const mongoose = require("mongoose");

const TransHistory = new mongoose.Schema({
  vendor_name: {
    type: String,
    required: [true, "Please enter vendor name: "],
    trim: true,
  },
  trans_type: {
    type: String,
    require: true,
  },
  trans_amount: {
    type: Number,
    require: true,
  },
  trans_desc: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const myDB = mongoose.connection.useDb("Khata");

module.exports = myDB.model("history", TransHistory);
