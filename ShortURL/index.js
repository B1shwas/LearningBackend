const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { connectDatabase } = require("./db");
const cookieParser = require("cookie-parser");

// routes import
const UrlRouter = require("./routes/url.routes");
const staticRoute = require("./routes/static-route.routes");
const userRoute = require("./routes/user.routes");
const {
  checkForAuthentication,
  restrictTo,
} = require("./middlewares/auth.middlewares");

const app = express();
const PORT = 3000;
dotenv.config({
  path: "./.env",
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["admin", "user"]), UrlRouter);
app.use("/", staticRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running at PORT : ${PORT}`);
});

connectDatabase();
