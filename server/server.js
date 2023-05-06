const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ override: true });
const employeeRoutes = require("./routes/employee.routes");
const userRoutes = require("./routes/user.routes");
const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use("/api", employeeRoutes);
app.use("/api/user", userRoutes);
/* API ERROR PAGES */
app.use("/api", (req, res) => {
  res.status(404).send({ employee: "Not found..." });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/* MONGOOSE */
const dbURI = process.env.ATLAS_URI || "";
const weather = process.env.WEATHER_API || "";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to the database");
});
db.on("error", (err) => console.log("Error: " + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
