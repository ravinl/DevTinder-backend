const express = require("express");

const app = express();

app.use("/route", (req, res) => {
  // this function is called route handler

  res.send("Hello from the server!!");
});

app.listen(19777, () => {
  console.log("Server is listening successfully on port 19777");
});
