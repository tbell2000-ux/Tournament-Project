const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
const authRoutes = require("./src/routes/authRoutes");
const tournamentRoutes = require("./src/routes/tournamentRoutes");
const teamRoutes = require("./src/routes/teamRoutes");
const matchRoutes = require("./src/routes/matchRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tournaments", tournamentRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/matches", matchRoutes);

module.exports = app;