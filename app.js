const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
const authRoutes = require("./src/routes/authRoutes");
const tournamentRoutes = require("./src/routes/tournamentRoutes");
const teamRoutes = require("./src/routes/teamRoutes");
const matchRoutes = require("./src/routes/matchRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tournaments", tournamentRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/matches", matchRoutes);

// health check (useful for Render)
app.get("/", (req, res) => {
  res.json({ message: "Tournament API running" });
});

module.exports = app;