const { createDogs } = require("../controllers/dogsController");

const postDogs = async (req, res) => {
  const {
    name,
    heightMax,
    heightMin,
    weightMax,
    weightMin,
    yearsLifeMax,
    yearsLifeMin,
    image,
    idTemp,
  } = req.body;
  try {
    const dogs = await createDogs(
      name,
      heightMax,
      heightMin,
      weightMax,
      weightMin,
      yearsLifeMax,
      yearsLifeMin,
      image,
      idTemp
    );
    res.status(200).json(dogs);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = {
  postDogs,
};
