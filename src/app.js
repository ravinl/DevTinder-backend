const express = require("express");
const data_array = require("./data_file.js");

const server = express();

// CRUD Operation
const devTinder = {
  name: "DevTinder",
  developer: "Ravi Raushan Kumar",
  designer: "Ravi Raushan Kumar",
  tester: "Ravi Raushan Kumar",
  created_series: "Namaste Node",
  mentor: "Akshay Saini",
  creation_year: 2025,
  creation_month: "March",
};

server.listen(5324, () => {
  console.log("Server is listening on port 5324");
});
