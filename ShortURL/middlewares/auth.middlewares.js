const { getUser } = require("../utils/auth");

const checkForAuthentication = (req, res, next) => {
  const token = req.cookies?.token;
  req.user = null;

  if (!token) return next();

  const user = getUser(token);
  req.user = user;
  return next();
};

const restrictTo = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.end("UnAuthorized");
    return next();
  };
};

module.exports = { checkForAuthentication, restrictTo };
