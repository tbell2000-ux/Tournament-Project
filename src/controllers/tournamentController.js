const { Tournament } = require("../../models");

// GET ALL
const getAllTournaments = async (req, res) => {
  try {
    const data = await Tournament.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ONE
const getTournament = async (req, res) => {
  try {
    const data = await Tournament.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
const createTournament = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name required" });
    }

    const created = await Tournament.create({ name });

    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
const updateTournament = async (req, res) => {
  try {
    const data = await Tournament.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }

    await data.update(req.body);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
const deleteTournament = async (req, res) => {
  try {
    const data = await Tournament.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }

    await data.destroy();

    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// EXPORT ONLY ONCE
module.exports = {
  getAllTournaments,
  getTournament,
  createTournament,
  updateTournament,
  deleteTournament
};