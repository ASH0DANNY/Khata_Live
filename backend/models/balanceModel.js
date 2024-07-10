const mongoose =  require("mongoose");

const MyBalance = new mongoose.Schema({
    my_balance:{
        type:Number,
        required: [true, "Please my_amount"],
        default:0,
    }
});

const myDB = mongoose.connection.useDb("Khata");

module.exports = myDB.model("mybalance", MyBalance);