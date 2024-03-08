// routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// POST /api/login 
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { user_email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ user_email });
    if (!user) {
      return res.status(401).json({ error: "Invalid user email" });
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    // Generate JWT token
    const token = jwt.sign(
      { user_email: user.user_email },
      process.env.JWT_SECRET_KEY
    );
    // res.cookie("name","hari",{
    //   httpOnly: true
    // });
    res.status(200).cookie("token", token, {
      httpOnly: true,
      sameSite:"lax",
      expire : 24 * 60 * 60 * 1000 
    }).json({token,message:"success"});
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
