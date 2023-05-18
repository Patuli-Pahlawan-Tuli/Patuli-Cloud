const express = require("express");
const router = new express.Router();
const authHandler = require("../handler/authHandler");

router.post("/register", authHandler.register);
router.post("/login", authHandler.login);

module.exports = router;