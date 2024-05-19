const mongoose = require("mongoose");
const DB_NAME = require("../constants");

const connectDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://localhost:27017/short-url"
    );

    console.log(
      `MONGODB CONNECTED!! ${connectionInstance.connection.name}`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDatabase };
