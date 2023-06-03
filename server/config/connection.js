const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongod://localhost/tech-freeze", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connections;
