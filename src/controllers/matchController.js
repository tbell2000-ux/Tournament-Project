const { Match, Team } = require("../../models");

// GET all matches
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
    console.log(err);
    res.status(500).json({ message: "Error retrieving matches" });
  }
};

// CREATE match
exports.createMatch = async (req, res) => {
  try {
    const { round, scoreA, scoreB, teamAId, teamBId } = req.body;

    if (!round || !teamAId || !teamBId) {
      return res.status(400).json({
        message: "round, teamAId, teamBId are required"
      });
    }

    const match = await Match.create({
      round,
      scoreA: scoreA || 0,
      scoreB: scoreB || 0,
      teamAId,
      teamBId
    });

    return res.status(201).json(match);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

// GET match by ID
exports.getMatchById = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    res.json(match);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving match" });
  }
};

// UPDATE match
exports.updateMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    await match.update(req.body);

    res.json(match);
  } catch (err) {
    res.status(500).json({ message: "Error updating match" });
  }
};

// DELETE match
exports.deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);

    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    await match.destroy();

    res.json({ message: "Match deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting match" });
  }
};