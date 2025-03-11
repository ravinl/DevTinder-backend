const dotenv = require("dotenv");
dotenv.config();

const { connectDB } = require("./config/connectDB");
const { listenServer } = require("./config/server");

(function () {
  connectDB()
    .then(() => {
      console.log("Connection to database established!!");
      listenServer();
    })
    .catch((err) => console.log("Error", err));
})();
