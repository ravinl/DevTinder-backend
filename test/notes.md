# one route can have multiple route handlers.

** eg: **

// app.use("/my_route", (req, res) => {
res.send("First route handler");
}, (req, res) => {
res.send("Second route handler");
})

## When and why we should use multiple routes?
