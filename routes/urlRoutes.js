const express = require("express");

const router = express.Router();

const {
    createShortUrl,
    redirectUrl,
} = require("../controllers/urlController");


// POST API
router.post("/shorten", createShortUrl);

// REDIRECT API
router.get("/:shortCode", redirectUrl);

module.exports = router;