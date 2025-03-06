# one route can have multiple route handlers.

** eg: **

// app.use("/my_route", (req, res) => {
res.send("First route handler");
}, (req, res) => {
res.send("Second route handler");
})

# Why and when we should use multiple route handlers?
