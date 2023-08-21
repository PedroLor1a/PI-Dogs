const { Router } = require("express");
const { getDogsApi } = require("../handlers/getDogs");
const { dogsById } = require("../handlers/getDogsId");
const { postDogs } = require("../handlers/createDogs");

const router = Router();

router.get("/", getDogsApi);
router.get("/:id", dogsById);
router.post("/", postDogs);

module.exports = router;
