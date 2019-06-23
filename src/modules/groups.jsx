
const initialState = [];

export const addGroup = (payload) => ({ type : 'ADD_GROUP', payload });

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      console.log('[ADD_GROUP] received payload : ', action.payload);
      return state;
    default:
      return state;
  }
};