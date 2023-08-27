import { GET_DOGS, GET_TEMPS } from "./actions-types";

import axios from "axios";

export const getDogs = () => {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/dogs/");
    const infoDogs = response.data;
    dispatch({
      type: GET_DOGS,
      payload: infoDogs,
    });
  };
};

export const getTemps = () => {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/temperaments");
    const temps = response.data;
    dispatch({
      type: GET_TEMPS,
      payload: temps,
    });
  };
};
