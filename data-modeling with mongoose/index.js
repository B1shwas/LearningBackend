import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Data Modeling`);
});

app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
