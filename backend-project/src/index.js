import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port:  ${process.env.PORT}`);
});

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     app.on("error", (error) => {
//       console.log("ERROR:", error);
//       throw error;
//     });

//     app.get("/backend", (req, res) => {
//       const host = connectionInstance.connection.host;
//       res.send(`<h2>HOSTING:<br> ${host}</h2>`);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERR:", error);
//     throw error;
//   }
// })();
