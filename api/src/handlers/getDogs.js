const {
  getDogs,
  getDogsByName,
  getDogsDb,
  getDogsByNameDb,
} = require("../controllers/dogsController");

const getDogsApi = async (req, res) => {
  const { name } = req.query;
  const request = name ? await getDogsByName(name) : await getDogs();
  try {
    res.status(200).json(request);
  } catch (error) {
    res.status(400).send("No hay perro");
  }
};

module.exports = {
  getDogsApi,
};
