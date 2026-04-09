const { Match, Team } = require("../../models");

// GET all
exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      include: [
        { model: Team, as: "teamA" },
        { model: Team, as: "teamB" }
      ]
    });

    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving matches" });
  }
};

// CREATE
exports.createMatch = async (req, res) => {
  try {
    const { round, scoreA, scoreB, teamAId, teamBId } = req.body;

    if (!round) {
      return res.status(400).json({ message: "Round is required" });
    }

    const match = await Match.create({
      round,
      scoreA,
      scoreB,
      teamAId,
      teamBId
    });

    res.status(201).json(match);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET by ID
exports.getMatchById = async (req, res) => {
  const match = await Match.findByPk(req.params.id);

  if (!match) {
    return res.status(404).json({ message: "Match not found" });
  }

  res.json(match);
};

// ✅ UPDATE
exports.updateMatch = async (req, res) => {
  const match = await Match.findByPk(req.params.id);

  if (!match) {
    return res.status(404).json({ message: "Match not found" });
  }

  await match.update(req.body);
  res.json(match);
};

// ✅ DELETE
exports.deleteMatch = async (req, res) => {
  const match = await Match.findByPk(req.params.id);

  if (!match) {
    return res.status(404).json({ message: "Match not found" });
  }

  await match.destroy();
  res.json({ message: "Match deleted" });
};