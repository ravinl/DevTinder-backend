const express = require("express");

const server = express();
const PORT = process.env.PORT;

const listenServer = () => {
  server.listen(PORT, () => {
    console.log("Server is listening at port", PORT);
  });
};

module.exports = { listenServer };
