const shortid = require("shortid");
const URL = require("../models/url.model");

const generateShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortID = shortid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
    role: req.role,
  });

  return res.render("home", { id: shortID });
};

const redirectURL = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry?.redirectURL);
};

const handleAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

module.exports = { generateShortURL, redirectURL, handleAnalytics };
