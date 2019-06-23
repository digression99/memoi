import generateUuid from 'uuid/v4';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMO":
      const { contents, hashtags  } = action.payload;

      const newMemo = {
        id : generateUuid(),
        title : '',
        contents,
        hashtags
      };

      const newState = {
        ...state,
        memos : [newMemo, ...state.memos]
      };

      return newState;
    default:
      return state;
  }
};