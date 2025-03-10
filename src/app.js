const { listenServer } = require("./config/listenServer");
const { connectDB } = require("./config/connectDB");

connectDB()
  .then(() => {
    console.log("Connection established successfully!!");
    listenServer();
  })
  .catch((err) => console.log(err));
