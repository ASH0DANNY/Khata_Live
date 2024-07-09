const express = require("express");
const {
  getAllVendors,
  getVendorDetails,
  createVendors,
} = require("./controller/vendors");
const { newTransaction } = require("./controller/transaction");
const { pushHistory, getHistory } = require("./controller/history");
const { getMyBalance, createBalance } = require("./controller/mybalance");
const { login, register } = require("./controller/login");

const router = express.Router();

router.route("/vendors/new").post(createVendors);

router.route("/vendors").get(getAllVendors);

router.route("/vendor/:id").get(getVendorDetails);

router.route("/vendor/:id").put(newTransaction);


//Transactions
router.route("/transaction/histories").get(getHistory);

router.route("/transaction/newhistory").post(pushHistory);


//Login user
// router.route("/register").post(register);
router.route("/login").post(login);


//My balance
// router.route("/mybalance/new").post(createBalance);
router.route("/mybalance").put(createBalance);
router.route("/mybalance").get(getMyBalance);

module.exports = router;
