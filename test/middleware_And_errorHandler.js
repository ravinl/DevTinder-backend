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
); // for this path '/user' the first route handler will execute.

app.use(
  "/test",
  (req, res) => {
    console.log("1st test route handler");
  },
  (req, res) => {
    console.log("2nd test route handler");
    res.send("Hello from the test server-2");
  }
); // for this path '/test' the first route handler will execute and will be caught in loop because the first route handler is not sending any response.

app.listen(19777, () => {
  console.log("Server is listening successfully on port 19777");
});
