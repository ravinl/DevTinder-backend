const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://raviraushannl:<db_password>@namastenode.xjqdr.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
