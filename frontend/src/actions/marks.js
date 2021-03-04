import axios from 'axios';

import { GET_MARKS, ADD_MARKS } from './types';

// GET MARKS
export const getMarks = () => (dispatch) => {
  axios
    .get('/api/marks/')
    .then((res) => {
      dispatch({
        type: GET_MARKS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD MARKS
export const addMarks = (marks) => (dispatch) => {
  axios
    .post('/api/marks/', marks)
    .then((res) => {
      dispatch(createMessage({ addMarks: 'Marks Added' }));
      dispatch({
        type: ADD_MARKS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
