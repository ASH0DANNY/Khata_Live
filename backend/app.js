const express = require("express");
const cookieParser = require("cookie-parser");
const cors =require("cors");

const app = express();
const errorMiddleware = require("./middleware/errors");

//It will allow all cors requests
app.use(cors());

app.use(express.json());

app.use(cookieParser());

//Route Imports
const vendor = require("./routs");

app.use("/api/khata", vendor);

app.use(errorMiddleware);

module.exports = app;
