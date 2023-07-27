

import { combineReducers } from "redux";
import { ADD_DATA, DELETE_DATA, UPDATE_DATA } from "../actions/actionTypes";
const initialState  = {
  data : [{
    contact: "1234567890",
    dob: "2014-10-25",
    email: "laduco@mailinator.com",
    fullname: "Rhea Cochran",
    gender: "female",
    image: null,
    languages: ["English"],
    nationality: "UK",
  },
  {
    contact: "1234567890",
    dob: "1983-01-15",
    email: "migyx@mailinator.com",
    fullname: "Gil Humphrey",
    gender: "female",
    image: null,
    languages: ["English", "Gujarati"],
    nationality: "USA",
  },],
}
  
const dataReducer = (state=initialState, action)=>{
  switch (action.type) {
    case ADD_DATA:
      // Case: Adding data to the state
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case DELETE_DATA:
      // Case: Deleting data from the state
      return {
        ...state,
        data: state.data.filter((item, index) => index !== action.payload),
      };

    case UPDATE_DATA:
      // Case: Updating data in the state
      return {
        ...state,
        data: state.data.map((item, index) =>
          index == action.payload.id ? action.payload.data : item
        ),
      };

    default:
      // Default case: Return the current state if no action type matches
      return state;
  }
}
  
const reducers = combineReducers({
    crud : dataReducer
})
  
export default reducers