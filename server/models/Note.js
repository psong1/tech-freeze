const { Schema } = require("mongoose");

const noteSchema = new Schema({
  noteId: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  noteBody: {
    type: String,
  },

  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = noteSchema;

