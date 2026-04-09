const express = require("express");
const router = express.Router();
const tournamentController = require("../controllers/tournamentController");

router.get("/", tournamentController.getAllTournaments);
router.post("/", tournamentController.createTournament);
router.get("/:id", tournamentController.getTournamentById);

// ✅ ADD THESE
router.put("/:id", tournamentController.updateTournament);
router.delete("/:id", tournamentController.deleteTournament);

module.exports = router;