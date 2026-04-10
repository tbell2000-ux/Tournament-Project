const express = require("express");

const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/auth");
const adminOnly = require("./middleware/admin");

const app = express();

app.use(express.json());

/*
Routes
*/
app.use("/api/auth", authRoutes);

/*
Public route
*/
app.get("/", (req, res) => {
  res.json({ message: "Tournament API running" });
});

/*
Protected route (any logged in user)
*/
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile data",
    user: req.user
  });
});

/*
Admin only route
*/
app.get("/api/admin", authMiddleware, adminOnly, (req, res) => {
  res.json({
    message: "Admin access granted",
    user: req.user
  });
});

/*
Start server
*/
app.listen(3000, () => {
  console.log("Server running on port 3000");
});