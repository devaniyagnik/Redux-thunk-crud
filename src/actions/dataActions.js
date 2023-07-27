import { ADD_DATA, DELETE_DATA, UPDATE_DATA } from './actionTypes';

// Action creator for adding data
export const addData = (data) => {
  
  return {
    type: ADD_DATA,    // Action type for adding data
    payload: data,     // The data to be added
  };
};

// Action creator for deleting data
export const deleteData = (id) => {
  return {
    type: DELETE_DATA, // Action type for deleting data
    payload: id,       // The index/id of the data to be deleted
  };
};

// Action creator for updating data
export const updateData = (id, data) => {
  
  return {
    type: UPDATE_DATA, // Action type for updating data
    payload: { id, data }, // Object containing id (index of the data) and data (updated data)
  };
};
