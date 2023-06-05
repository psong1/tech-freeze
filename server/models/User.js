const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const noteSchema = require("./Note");
const categorySchema = require("./Categories");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address."],
    },

    password: {
      type: String,
      required: true,
    },

    categories: [categorySchema],

    savedNotes: [noteSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("noteCount").get(() => this.savedNotes.length);

const User = model("User", userSchema);

module.exports = User;
