import { makeActionCreator } from "../../helpers";
import { SET_PERSON_NAME, SET_PERSON_AGE } from "../actionTypes";

export const setPersonName = makeActionCreator(SET_PERSON_NAME, "name");
export const setPersonAge = makeActionCreator(SET_PERSON_AGE, "age");
