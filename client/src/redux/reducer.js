import {
  FILTER,
  FILTER_DB,
  FILTER_TEMPS,
  FILTER_WEIGHT,
  GET_DOGS,
  GET_TEMPS,
} from "./actions-types";

const initialState = {
  dogs: [],
  temps: [],
  filterByTemps: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_TEMPS:
      return {
        ...state,
        temps: action.payload,
      };
    case FILTER:
      let orderName;
      if (action.payload === "asc") {
        console.log("asc");
        orderName = state.dogs.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "desc") {
        console.log("desc");
        orderName = state.dogs.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "all") {
        console.log("all");
        orderName = state.dogs.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }
          return 0;
        });
      }
      return {
        ...state,
        filterByTemps: [...orderName],
      };
    case FILTER_WEIGHT:
      let orderWeigth;
      if (action.payload === "asc") {
        orderWeigth = state.dogs.sort((a, b) => {
          if (
            Number(a.weigth.substring(0, 2)) > Number(b.weigth.substring(0, 2))
          ) {
            return 1;
          }
          if (
            Number(b.weigth.substring(0, 2)) > Number(a.weigth.substring(0, 2))
          ) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "desc") {
        orderWeigth = state.dogs.sort((a, b) => {
          if (
            Number(a.weigth.substring(0, 2)) > Number(b.weigth.substring(0, 2))
          ) {
            return -1;
          }
          if (
            Number(b.weigth.substring(0, 2)) > Number(a.weigth.substring(0, 2))
          ) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "all") {
        console.log("all");
        orderWeigth = state.dogs.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }
          return 0;
        });
      }
      return {
        ...state,
        filterByTemps: [...orderWeigth],
      };
    case FILTER_TEMPS:
      return {
        ...state,
        filterByTemps: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
