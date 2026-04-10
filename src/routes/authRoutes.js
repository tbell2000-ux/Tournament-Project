const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SECRET = "supersecretkey123";

// in-memory users
const users = [];

/*
REGISTER
*/
router.post("/register", (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const exists = users.find((u) => u.email === email);

  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({
    username,
    email,
    password,
    role: role || "student"
  });

  res.json({ message: "User registered successfully" });
});

/*
LOGIN (JWT)
*/
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({
    message: "Login successful",
    token,
    user: {
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
});

module.exports = router;