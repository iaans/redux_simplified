import { updateObject } from "../../helpers";
import { SET_PERSON_NAME, SET_PERSON_AGE } from "../actionTypes";

const initialState = {
  name: "",
};

const personReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PERSON_NAME:
      return updateObject(state, { name: action.name });

    case SET_PERSON_AGE:
      return updateObject(state, { age: action.age });

    default:
      return state;
  }
};

export default personReducer;
