const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Enter Email!"],
  },
  password: {
    type: String,
    require: [true, "Enter Password!"],
  },
});

const myDB = mongoose.connection.useDb("Khata");

module.exports = myDB.model("khatauser", UserSchema);
