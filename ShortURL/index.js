const dotenv = require("dotenv");
const { connectDatabase } = require("./db");
const express = require("express");
const URLRouter = require("./routes/url.routes");
const app = express();
const PORT = 3000;
dotenv.config({
  path: "./.env",
});

app.use(express.json());
app.use("/url", URLRouter);

app.listen(PORT, () => {
  console.log(`Server running at PORT : ${PORT}`);
});

connectDatabase();
