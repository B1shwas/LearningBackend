const mongoose = require("mongoose");
const DB_NAME = require("../constants");

const connectDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}${DB_NAME}`
    );

    console.log(`MONGODB CONNECTED!! ${connectionInstance.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDatabase };
