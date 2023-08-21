const URL = "https://api.thedogapi.com/v1/breeds";
const axios = require("axios");
const { Dogs, Temperaments } = require("../db");

const getDogs = async () => {
  const response = await axios(URL);
  const infoDogs = response.data;
  const dogs = infoDogs.map((p) => {
    return {
      id: p.id,
      name: p.name,
      height: p.height.metric + " CM",
      weigth: p.weight.metric + " KG",
      yearsLife: p.life_span,
      image:
        "https://cdn2.thedogapi.com/images/" + p.reference_image_id + ".jpg",
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
    return [...dogsApi, ...dogsDb];
  } catch (error) {
    console.error("error alldogs", error.message);
    return error;
  }
};
console.log(getAllDogs());

//TIENE QUE BUSCAR EN LA DB TAMBIEN
const getDogsByName = async (name) => {
  try {
    if (name) {
      const response = await axios(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`
      );
      const data = response.data;
      if (data) {
        return data.map((p) => {
          return {
            id: p.id,
            name: p.name,
            height: p.height.metric + " CM",
            weigth: p.weight.metric + " KG",
            yearsLife: p.life_span,
            image:
              "https://cdn2.thedogapi.com/images/" +
              p.reference_image_id +
              ".jpg",
          };
        });
      }
    } else if (name) {
      const newResponse = await Dogs.findOne({
        where: { name: name },
      });
      return newResponse;
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
  id,
  name,
  height,
  weight,
  yearsLife,
  image,
  idTemp
) => {
  const newDog = await Dogs.create({
    id,
    name,
    height,
    weight,
    yearsLife,
    image,
  });

  const temperament = await Temperaments.findAll({
    where: {
      id: idTemp,
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
