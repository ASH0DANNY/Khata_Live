const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Config
dotenv.config({ path: "config/config.env" });

//Connecting to DB
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listning on ${process.env.BASE_URL}`);
});
