import { GET_MARKS, ADD_MARKS } from '../actions/types.js';

const initialState = {
  marks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MARKS:
      return {
        ...state,
        marks: action.payload,
      };
    case ADD_MARKS:
      return {
        ...state,
        marks: [...state.marks, action.payload],
      };
    default:
      return state;
  }
}
