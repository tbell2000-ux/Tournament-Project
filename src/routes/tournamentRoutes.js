const express = require("express");
const router = express.Router();

const {
  getAllTournaments,
  getTournament,
  createTournament,
  updateTournament,
  deleteTournament
} = require("../controllers/tournamentController");


router.post("/", createTournament);
router.get("/", getAllTournaments);
router.get("/:id", getTournament);
router.put("/:id", updateTournament);
router.delete("/:id", deleteTournament);

module.exports = router;