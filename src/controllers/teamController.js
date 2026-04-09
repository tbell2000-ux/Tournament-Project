const { Team } = require("../../models");

// GET all
exports.getAllTeams = async (req, res) => {
  const teams = await Team.findAll();
  res.json(teams);
};

// CREATE
exports.createTeam = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Name is required" });
    }
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET by ID
exports.getTeamById = async (req, res) => {
  const team = await Team.findByPk(req.params.id);
  if (!team) {
    return res.status(404).json({ message: "Team not found" });
  }
  res.json(team);
};

// UPDATE
exports.updateTeam = async (req, res) => {
  const team = await Team.findByPk(req.params.id);

  if (!team) {
    return res.status(404).json({ message: "Team not found" });
  }

  await team.update(req.body);
  res.json(team);
};

// DELETE
exports.deleteTeam = async (req, res) => {
  const team = await Team.findByPk(req.params.id);

  if (!team) {
    return res.status(404).json({ message: "Team not found" });
  }

  await team.destroy();
  res.json({ message: "Team deleted" });
};