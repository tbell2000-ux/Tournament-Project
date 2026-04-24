const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();
const { User } = require("../../models");

const SECRET = "supersecretkey123";

/*
REGISTER
*/
router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  const existing = await User.findOne({ where: { email } });
  if (existing) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashed,
    role: role || "guest"
  });

  res.json(user);
});

/*
LOGIN
*/
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: "Not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET,
    { expiresIn: "2h" }
  );

  res.json({ token, user });
});

module.exports = router;