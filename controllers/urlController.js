const validUrl = require("valid-url");
const { nanoid } = require("nanoid");

const Url = require("../models/Url");


// CREATE SHORT URL
exports.createShortUrl = async(req, res) => {

    try {

        const { url, customCode } = req.body;

        // Validate URL
        if (!validUrl.isUri(url)) {
            return res.status(400).json({
                success: false,
                message: "Invalid URL",
            });
        }

        // Use custom code OR generate random code
        let shortCode = customCode || nanoid(7);

        // Check if custom code already exists
        const existingUrl = await Url.findOne({ shortCode });

        if (existingUrl) {
            return res.status(400).json({
                success: false,
                message: "Short code already exists",
            });
        }

        // Save URL
        const newUrl = await Url.create({
            originalUrl: url,
            shortCode,
        });

        // Final short URL
        const shortUrl =
            `${req.protocol}://${req.get("host")}/${shortCode}`;

        res.status(201).json({
            success: true,
            shortUrl,
            data: newUrl,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



// REDIRECT URL
exports.redirectUrl = async(req, res) => {

    try {

        const { shortCode } = req.params;

        const url = await Url.findOne({ shortCode });

        // URL not found
        if (!url) {
            return res.status(404).json({
                success: false,
                message: "URL not found",
            });
        }

        // Increase click count
        url.clicks += 1;

        await url.save();

        // Redirect
        return res.redirect(url.originalUrl);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};