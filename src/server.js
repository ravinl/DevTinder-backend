const express = require("express");

const server = express();

server.listen(5324, () => {
  console.log("Server is listening on port 5324");
});
