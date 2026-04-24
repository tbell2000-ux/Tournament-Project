const db = require("../../models");

const Match = db.Match;
const Team = db.Team;

/*
GET ALL MATCHES
*/
exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      include: [
        {
          model: Team,
          as: "teamA",
          required: false
        },
        {
          model: Team,
          as: "teamB",
          required: false
        }
      ]
    });

    return res.status(200).json(matches);
  } catch (err) {
    console.log("GET MATCHES ERROR:", err);
    return res.status(500).json({
      message: "Error retrieving matches"
    });
  }
};

/*
CREATE MATCH
*/
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
    console.log("CREATE MATCH ERROR:", err);
    return res.status(400).json({
      message: err.message
    });
  }
};

/*
GET MATCH BY ID
*/
exports.getMatchById = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match not found"
      });
    }

    return res.status(200).json(match);
  } catch (err) {
    return res.status(500).json({
      message: "Error retrieving match"
    });
  }
};

/*
UPDATE MATCH
*/
exports.updateMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match not found"
      });
    }

    await match.update(req.body);

    return res.status(200).json(match);
  } catch (err) {
    return res.status(500).json({
      message: "Error updating match"
    });
  }
};

/*
DELETE MATCH
*/
exports.deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match not found"
      });
    }

    await match.destroy();

    return res.status(200).json({
      message: "Match deleted"
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error deleting match"
    });
  }
};