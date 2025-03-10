const express = require("express");

const server = express();
const PORT = 19777;

const listenServer = () => {
  server.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`);
  });
};

module.exports = { listenServer };
