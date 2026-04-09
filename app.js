const express = require("express");
const app = express();

const db = require("./models");

// middleware
app.use(express.json());

// import routes
const teamRoutes = require("./routes/teamRoutes");
const tournamentRoutes = require("./routes/tournamentRoutes");
const matchRoutes = require("./routes/matchRoutes");

// use routes
app.use("/teams", teamRoutes);
app.use("/tournaments", tournamentRoutes);
app.use("/matches", matchRoutes);

module.exports = app;