import { 
  GET_POSTS,
  NEW_POST,
  UPDATE_POST,
  DELETE_POST,
 } from '../actions';

 

// look @ AXIOS LAB FOR THESE REQUESTS - lines with return statements should be changed
export default (posts = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      console.log(`THIS IS PAYLOAD >>>>>>` + [...posts]);
      return {...posts};
    case NEW_POST:
      return action.payload.data;
    case UPDATE_POST:
      return action.payload.data;
    case DELETE_POST:
      return action.payload.data;
    default:
      return posts
  }
};
