const express = require("express");
const router = express.Router();

// ✅ Correct import
const storyController = require("../controllers/storyController");

// ✅ Correct usage
router.get("/:projectId", storyController.getStories);
router.post("/", storyController.createStory);

module.exports = router;