const db = require("../config/connection");
const { User, Note, Categories } = require("../models");

const userData = require("./userData.json");
const noteData = require("./noteData.json");
const categoryData = require("./categoryData.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Note.deleteMany({});
    await Categories.deleteMany({});

    await User.create(userData);
    await Note.create(noteData);
    await Categories.create(categoryData);

    console.log("all done");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
