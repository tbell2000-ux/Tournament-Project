const express = require("express");
const app = express();
const db = require("../models"); // src/models

// Middleware for parsing JSON
app.use(express.json());

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Import routes
const tournamentRoutes = require("./routes/tournamentRoutes");
const teamRoutes = require("./routes/teamRoutes");
const matchRoutes = require("./routes/matchRoutes");

// Use routes
app.use("/teams", teamRoutes);
app.use("/tournaments", tournamentRoutes);
app.use("/matches", matchRoutes);

// Catch 404 for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // log error for debugging
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Start server after DB connection
const PORT = process.env.PORT || 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected!");
    // Sync tables if needed: db.sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

module.exports = app; // for testing