const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  isAdmin: { type: Boolean, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

userSchema.statics.register = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid!");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is weak!");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email in use!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, isAdmin: false });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!password || !email) {
    throw Error("All fields must be filled!");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email!");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password!");
  }
  console.log("USER: ", user);
  return user;
};

module.exports = mongoose.model("User", userSchema);
