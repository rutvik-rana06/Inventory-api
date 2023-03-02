const express = require("express");
const addHardware = require("../Controller/addhardware.js")

const router = express.Router()
router.post("/addhardware",addHardware);

module.exports = router;