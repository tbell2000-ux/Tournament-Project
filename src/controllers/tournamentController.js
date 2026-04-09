const { Tournament } = require("../../models");

// GET all
exports.getAllTournaments = async (req, res) => {
  const tournaments = await Tournament.findAll();
  res.json(tournaments);
};

// CREATE
exports.createTournament = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const tournament = await Tournament.create(req.body);
    res.status(201).json(tournament);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET by ID
exports.getTournamentById = async (req, res) => {
  const tournament = await Tournament.findByPk(req.params.id);

  if (!tournament) {
    return res.status(404).json({ message: "Tournament not found" });
  }

  res.json(tournament);
};

// UPDATE
exports.updateTournament = async (req, res) => {
  const tournament = await Tournament.findByPk(req.params.id);

  if (!tournament) {
    return res.status(404).json({ message: "Tournament not found" });
  }

  await tournament.update(req.body);
  res.json(tournament);
};

// DELETE
exports.deleteTournament = async (req, res) => {
  const tournament = await Tournament.findByPk(req.params.id);

  if (!tournament) {
    return res.status(404).json({ message: "Tournament not found" });
  }

  await tournament.destroy();
  res.json({ message: "Tournament deleted" });
};