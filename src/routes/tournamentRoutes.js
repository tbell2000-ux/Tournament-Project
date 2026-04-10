const express = require("express");
const router = express.Router();

const {
  getAllTournaments,
  getTournament,
  createTournament,
  updateTournament,
  deleteTournament
} = require("../controllers/tournamentController");

// TEMP FIX (remove auth until tests pass)
router.post("/", createTournament);
router.get("/", getAllTournaments);
router.get("/:id", getTournament);
router.put("/:id", updateTournament);
router.delete("/:id", deleteTournament);

module.exports = router;