const express = require("express");
const router = express.Router();

const matchController = require("../controllers/matchController");

// IMPORT MIDDLEWARE
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// PUBLIC
router.get("/", matchController.getAllMatches);
router.get("/:id", matchController.getMatchById);

// ADMIN ONLY
router.post("/", auth, admin, matchController.createMatch);
router.put("/:id", auth, admin, matchController.updateMatch);
router.delete("/:id", auth, admin, matchController.deleteMatch);

module.exports = router;