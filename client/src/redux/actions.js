import {
  GET_DOGS,
  GET_TEMPS,
  FILTER,
  FILTER_WEIGHT,
  FILTER_TEMPS,
} from "./actions-types";

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

export const filterName = (e) => {
  return {
    type: FILTER,
    payload: e,
  };
};

export const filterWeight = (e) => {
  return {
    type: FILTER_WEIGHT,
    payload: e,
  };
};

export const filterTemps = (e) => {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/dogs/");
    const infoDogs = response.data;
    const mapeoTemps = infoDogs.map((e) => {
      return e.temperament?.map((e) => {
        return e;
      });
    });
    dispatch({
      type: FILTER_TEMPS,
      payload: mapeoTemps,
    });
  };
};

console.log(filterTemps());
