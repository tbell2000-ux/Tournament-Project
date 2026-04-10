const express = require("express");
const router = express.Router();

const {
  getAllTournaments,
  getTournament,
  createTournament,
  updateTournament,
  deleteTournament
} = require("../controllers/tournamentController");

const { verifyToken, isAdmin } = require("../middleware/auth");

// VIEW (participants allowed)
router.get("/", verifyToken, getAllTournaments);
router.get("/:id", verifyToken, getTournament);

// ADMIN ONLY
router.post("/", verifyToken, isAdmin, createTournament);
router.put("/:id", verifyToken, isAdmin, updateTournament);
router.delete("/:id", verifyToken, isAdmin, deleteTournament);

module.exports = router;