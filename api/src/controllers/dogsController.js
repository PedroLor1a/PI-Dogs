const URL = "https://api.thedogapi.com/v1/breeds";
const axios = require("axios");
const { Dogs, Temperaments } = require("../db");

const getDogs = async () => {
  const response = await axios(URL);
  const infoDogs = response.data;
  const dogs = infoDogs.map((p) => {
    let newTemp = p.temperament?.split(",");

    return {
      id: p.id,
      name: p.name,
      height: p.height.metric + " CM",
      weigth: p.weight.metric + " KG",
      temperament: newTemp,
      yearsLife: p.life_span,
      image:
        "https://cdn2.thedogapi.com/images/" + p.reference_image_id + ".jpg",
      bredFor: p.bred_for,
    };
  });
  return dogs;
};

const getDogsDb = async () => {
  try {
    return (
      await Dogs.findAll({
        include: {
          model: Temperaments,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      })
    ).map((p) => {
      const json = p.toJSON();
      return {
        ...json,
      };
    });
  } catch (error) {
    console.error("Error in Db", error.message);
  }
};

const getAllDogs = async () => {
  try {
    const dogsApi = await getDogs();
    const dogsDb = await getDogsDb();
    console.log(dogsDb);
    return [...dogsApi, ...dogsDb];
  } catch (error) {
    console.error("error alldogs", error.message);
    return error;
  }
};

//TIENE QUE BUSCAR EN LA DB TAMBIEN
const getDogsByName = async (name) => {
  try {
    if (name) {
      const response = await axios(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`
      );
      const data = response.data;
      if (data.length > 0) {
        return data.map((p) => {
          return {
            id: p.id,
            name: p.name,
            height: p.height.metric + " CM",
            weigth: p.weight.metric + " KG",
            temperament: p.temperament,
            yearsLife: p.life_span,
            image:
              "https://cdn2.thedogapi.com/images/" +
              p.reference_image_id +
              ".jpg",
          };
        });
      } else {
        const newResponse = await Dogs.findAll({
          where: { name: name },
        });
        return newResponse.map((d) => ({
          id: d.id,
          name: d.name,
          heightMax: d.heightMax,
          heightMin: d.heightMin,
          weightMax: d.weightMax,
          weightMin: d.weightMin,
          yearsLifeMax: d.yearsLifeMax,
          yearsLifeMin: d.yearsLifeMin,
          image: d.image,
          idTemp: d.idTemp,
        }));
      }
    }
  } catch (error) {
    console.error("error en name", error.message);
  }
};

const getDogsByNameDb = async (name) => {
  try {
    const dogs = await Dogs.findAll({
      where: { name: name },
    });
    if (dogs) {
      return dogs;
    }
  } catch (error) {
    console.error("error name db", error.message);
  }
};

// const getDogsAllName = async (name)=>{
//   try {
//     const nombre = name ? await
//   } catch (error) {

//   }
// }

const createDogs = async (
  name,
  heightMax,
  heightMin,
  weightMax,
  weightMin,
  yearsLifeMax,
  yearsLifeMin,
  image,
  idTemp
) => {
  const newDog = await Dogs.create({
    name,
    heightMax,
    heightMin,
    weightMax,
    weightMin,
    yearsLifeMax,
    yearsLifeMin,
    image,
    idTemp,
  });

  const temperament = await Temperaments.findAll({
    where: {
      name: idTemp,
    },
  });
  temperament.forEach((p) => {
    p.addDogs(newDog);
  });
  return newDog;
};

module.exports = {
  getDogs,
  getDogsByName,
  getAllDogs,
  getDogsDb,
  getDogsByNameDb,
  createDogs,
};
