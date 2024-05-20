const User = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../utils/auth");

const handleUserSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("login");
};

const handleLoginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.render("login", {
      error: "Invalid email or password",
    });
  }
  //For stateful authentication using sesson
  // const sessionId = uuidv4();
  // setUser(sessionId, user);
  // res.cookie("uid", sessionId);

  const token = setUser(user);
  res.cookie("token", token);
  res.redirect("/");
};

module.exports = { handleUserSignUp, handleLoginUser };
