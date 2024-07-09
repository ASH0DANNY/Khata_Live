const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter vendor name: "],
    trim: true,
  },
  dsctiption: {
    type: String,
    required: [true, "Please enter description: "],
    default: "others",
  },
  category: {
    type: String,
    required: [true, "Please enter description: "],
    default: "others",
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  balance: {
    type: Number,
    require: true,
    default: 0,
  },
  transaction: [
    {
      trans_type: {
        type: String,
        require: true,
      },
      amount: {
        type: Number,
        require: true,
      },
      desc: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const myDB = mongoose.connection.useDb("Khata");

module.exports = myDB.model("khataVendors", VendorSchema);
