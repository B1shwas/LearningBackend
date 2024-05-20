const express = require("express");
const URL = require("../models/url.model");
const { restrictTo } = require("../middlewares/auth.middlewares");

const router = express.Router();

router.get("/", restrictTo(["user", "admin"]), async (req, res) => {
  const allUrls = await URL.find({ createdBy: req.user._id });
  res.render("home", {
    urls: allUrls,
  });
});
router.get("/admin/url", restrictTo(["admin"]), async (req, res) => {
  const allUrls = await URL.find({});
  res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
