const { Schema } = require("mongoose");
const noteSchema = require("./Note");

const categorySchema = new Schema({
  category: {
    type: String,
  },

  createdOn: {
    type: Date,
    default: Date.now(),
  },

  notes: [noteSchema],
});

module.exports = categorySchema;
