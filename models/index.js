const sequelize = require("../database");

const Match = require("./Match");
const Team = require("./Team");
const Tournament = require("./Tournament");
const User = require("./User");

const db = {};

db.sequelize = sequelize;

db.Match = Match;
db.Team = Team;
db.Tournament = Tournament;
db.User = User;

module.exports = db;