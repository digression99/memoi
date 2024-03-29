import { createStore } from 'redux';
import reducers from 'modules';
import initialState from './data';

export default () => {
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};