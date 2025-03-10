const mongoose = require("mongoose");

const connectDB = mongoose.connect(
  "mongodb+srv://raviraushannl:<db_password>@namastenode.xjqdr.mongodb.net/devTinder"
);

module.exports = { connectDB };
