const { getTemperaments } = require("../controllers/temperamentsController");

const getTemps = async (req, res) => {
  try {
    const request = await getTemperaments();
    res.status(200).json(request);
  } catch (error) {
    res.status(400).send("error getTemps");
  }
};

module.exports = {
  getTemps,
};
