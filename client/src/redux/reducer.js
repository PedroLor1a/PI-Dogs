import { GET_DOGS, GET_TEMPS } from "./actions-types";

const initialState = {
  dogs: [],
  temps: [],
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
    default:
      return { ...state };
  }
};
export default reducer;
