const mongoose = require("mongoose");
const connectionURI = process.env.DB_URI;

const connectDB = async () => {
  await mongoose.connect(connectionURI);
};

module.exports = { connectDB };
