const express = require("express");
const {
  generateShortURL,
  redirectURL,
  handleAnalytics,
} = require("../controllers/url.controllers");
const URL = require("../models/url.model");

const router = express.Router();

router.post("/", generateShortURL);
router.get("/:shortId", redirectURL);
router.get("/analytics/:shortId", handleAnalytics);

module.exports = router;
