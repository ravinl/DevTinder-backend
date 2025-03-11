const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://raviraushannl:mnhVrwTebxE90Zpx@namastenode.xjqdr.mongodb.net/"
  );
};

module.exports = { connectDB };
