require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/login", (req, res) => {
  res.send(`<h2>Please Login to continue!!</h2>`);
});

app.get("/twitter", (req, res) => {
  res.send("Welcome to Nepal");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Visca Barca</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
