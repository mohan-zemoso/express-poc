const express = require("express");

const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.patients);
  res.send(adminData.patients.length > 0 ? adminData.patients : "No patients");
});

module.exports = router;
