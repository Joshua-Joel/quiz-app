require("dotenv").config();
const mongoose = require("../../services/db");
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// const corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
//   credentials: true
// };
// app.use(cors({ 
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
app.use(cors({ 
  origin: 'http://localhost:3001', 
  credentials: true
}));

const quizRoutes = require("../../routes/quiz");
const userRoutes = require("../../routes/user");
const authRoutes = require("../../routes/auth");

// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());


app.use("/api/quiz", quizRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3001",
    "Access-Control-Allow-Credentials": true
  })
  res.send("Heyyy you reached my server...!");
});

module.exports = app;
