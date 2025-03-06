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

app.use(
  "/middleware",
  (req, res, next) => {
    console.log("1st middleware request handler");
    next();
  },
  (req, res) => {
    console.log("2nd middleware request handler");
    res.send("Hello from the middleware server-2");
  }
); // for this path '/middleware' the second route handler will be executed because in the first handler a middleware named 'next()' is being used, which will allow the control to get into the second route handler.

app.use("/canon", (req, res, next) => {
  console.log("Canon handler-1");
  next();
});

app.get(
  "/canon",
  (req, res, next) => {
    console.log("Canon handler-2");
    next();
  },
  (req, res, next) => {
    console.log("Canon handler-3");
    next();
  },
  (req, res, next) => {
    console.log("Canon handler-4");
    next();
  },
  (req, res) => {
    res.send("canon response");
  }
);

app.listen(19777, () => {
  console.log("Server is listening successfully on port 19777");
});
