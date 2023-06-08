const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://carlthorne:${process.env.DB_PW}@cluster0.cpmblyl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

module.exports = mongoose.connection;
