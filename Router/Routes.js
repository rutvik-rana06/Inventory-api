const express = require("express");
const addHardware = require("../Controller/addhardware.js")

const router = express.Router()
router.post("/addhardware",addHardware);
// router.get("/gethardware",showHardware);

module.exports = router;