const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/auth");


// Register User
const register = async (req, res) => {
  const { name, email, password, phone_number } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(req.body)
    const newUser = new User({ name, email, password: hashedPassword, phone_number });

    await newUser.save();
    res.status(201).json({ message: "You Are registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        // Crucially, include the isOnboarded status
        isOnboarded: user.isOnboarded,
        academicLevel: user.academicLevel,
        careerInterests: user.careerInterests,
        availableStudyTime: user.availableStudyTime,
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


const resetToken = async (req, res) => {
  const { token, password } = req.body;

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired token." });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password and remove reset token
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ message: "Password reset successful. You can now log in." });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Verify Reset Token
const VerifyResetToken = async (req, res) => {
  const { token } = req.params;

  try {
    if (!token) {
      return res.status(400).json({ error: "No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired token." });
    }

    res.json({ valid: true });
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(400).json({ error: "Invalid or expired token." });
  }
};

module.exports = {
  register,
  login,
  resetToken,
  VerifyResetToken
};