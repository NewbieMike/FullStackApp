const express = require("express");
const router = express.Router();

const Employee = require("../models/employee.model");

router.get("/employee", async (req, res) => {
  try {
    const result = await Employee.find();
    console.log(result);
    if (!result) res.status(404).json({ employee: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/employee/:id", async (req, res) => {
  try {
    const result = await Employee.findById(req.params.id);
    if (!result) res.status(404).json({ employee: "Not found" });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
