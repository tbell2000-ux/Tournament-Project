const express = require("express");
const router = express.Router();

const {
  getAllTournaments,
  getTournament,
  createTournament,
  updateTournament,
  deleteTournament
} = require("../controllers/tournamentController");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get("/", getAllTournaments);
router.get("/:id", getTournament);

router.post("/", auth, admin, createTournament);
router.put("/:id", auth, admin, updateTournament);
router.delete("/:id", auth, admin, deleteTournament);

module.exports = router;