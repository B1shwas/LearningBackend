const express = require("express");
const { handleUserSignUp } = require("../controllers/user.controllers");
const { handleLoginUser } = require("../controllers/user.controllers");
const router = express.Router();

router.post("/", handleUserSignUp);
router.post("/login", handleLoginUser);

module.exports = router;
