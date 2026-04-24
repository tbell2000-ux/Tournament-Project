const express = require("express");
const router = express.Router();

const teamController = require("../controllers/teamController");

// IMPORT MIDDLEWARE
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// PUBLIC
router.get("/", teamController.getAllTeams);
router.get("/:id", teamController.getTeamById);

// ADMIN ONLY
router.post("/", auth, admin, teamController.createTeam);
router.put("/:id", auth, admin, teamController.updateTeam);
router.delete("/:id", auth, admin, teamController.deleteTeam);

module.exports = router;