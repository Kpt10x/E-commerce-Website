// server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// Mock database for storing users
const users = [];

// Sign-up endpoint
app.post("/api/signup", (req, res) => {
  const { email, password } = req.body;
  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  // Create new user
  const newUser = { email, password };
  users.push(newUser);
  res.status(201).json({ message: "User created successfully" });
});

// Sign-in endpoint
app.post("/api/signin", (req, res) => {
  const { email, password } = req.body;
  // Find user in the database
  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  res.status(200).json({ message: "Sign in successful" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
