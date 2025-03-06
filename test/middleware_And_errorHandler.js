const express = require("express");

const app = express();

app.use("/route", (req, res) => {
  // this function is called route handler

  res.send("Hello from the server!!");
});

app.use(
  "/user",
  (req, res) => {
    res.send("Hello from first user router handler!!!");
  },
  (req, res) => {
    res.send("Hello from second user router handler!!!");
  }
);

app.listen(19777, () => {
  console.log("Server is listening successfully on port 19777");
});
