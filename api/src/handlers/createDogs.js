const { createDogs } = require("../controllers/dogsController");

const postDogs = async (req, res) => {
  const { id, name, height, weight, yearsLife, image, idTemp } = req.body;
  try {
    const dogs = await createDogs(
      id,
      name,
      height,
      weight,
      yearsLife,
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
