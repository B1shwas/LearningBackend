import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/students", (req, res) => {
  const students = [
    {
      id: 1,
      name: "Radhe",
      class: "Five",
    },
    {
      id: 2,
      name: "Hari",
      class: "Six",
    },
    {
      id: 3,
      name: "Gopal",
      class: "Seven",
    },
    {
      id: 4,
      name: "Shyan",
      class: "Eight",
    },
  ];
  res.send(students);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
