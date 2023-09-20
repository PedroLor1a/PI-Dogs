const URL = "https://api.thedogapi.com/v1/breeds";
const axios = require("axios");
const { Temperaments } = require("../db");

// const allTemperaments = async () => {
//   const response = await axios(URL);
//   console.log(response);
//   const infoTemp = response.data;
//   const temps = infoTemp.map((p) => {
//     return {
//       name: p.temperament,
//     };
//   });
//   console.log(temps);
//   return temps;
// };

const createTempsInDb = async () => {};

createTempsInDb();

const getTemperaments = async () => {
  if ((await Temperaments.count()) > 0) {
    const allTemps = await Temperaments.findAll();
    return allTemps;
  } else {
    const response = await axios(URL);
    const infoTemps = response.data;
    const mapeoTemp = infoTemps.map((p) => {
      let arraycito = `${p.temperament}`;
      return arraycito;
    });
    const newArray = mapeoTemp.join(", ").split(", ");
    const sinRepe = [...new Set(newArray)];
    const crearDbTemps = sinRepe.map((p) => {
      Temperaments.create({
        name: p,
      });
      return {
        name: p,
      };
    });
  }
};

module.exports = {
  getTemperaments,
};
