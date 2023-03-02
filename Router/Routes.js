const express = require("express");
const addHardware = require("../Controller/addhardware.js")
const showHardware = require("../Controller/showHardware.js")

const router = express.Router()
router.post("/addhardware",addHardware);
router.post("/gethardware",showHardware);

module.exports = router;