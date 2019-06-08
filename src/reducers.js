import generateUuid from 'uuid/v4';

export default (state, action) => {
  switch (action.type) {
    case "ADD_MEMO":
      console.log('add memo received.');

      const newMemo = {
        id : generateUuid(),
        title : '',
        contents : action.payload,
        hashtags : []
      };

      const newState = {
        ...state,
        memos : [...state.memos, newMemo]
      }
      console.log('new state : ', newState);
      return newState;
    default:
      return state;
  }
};