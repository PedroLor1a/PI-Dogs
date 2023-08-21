const { Router } = require("express");
const { getTemps } = require("../handlers/getTemperament");

const router = Router();

router.get("/", getTemps);

module.exports = router;
