const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  familyName: { type: String },
  lastName: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  department: { type: String },
  position: { type: Array },
});

module.exports = mongoose.model("Employee", employeeSchema);
