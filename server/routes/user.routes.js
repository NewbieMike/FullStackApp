const express = require("express");
const router = express.Router();

const { loginUser, registerUser } = require("../controllers/user.controllers");
router.post("/login", loginUser);

router.post("/register", registerUser);

module.exports = router;
