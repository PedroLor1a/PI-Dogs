const { getAllDogs } = require("../controllers/dogsController");

const dogsById = async (req, res) => {
  const { id } = req.params;
  const allDogs = await getAllDogs();
  try {
    if (id) {
      const dogsId = await allDogs.filter((p) => p.id == id);
      dogsId.length
        ? res.status(200).json(dogsId)
        : res.status(400).send("Dog not found");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  dogsById,
};
