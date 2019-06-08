import { createStore } from 'redux';
import reducers from './reducers';
import initialState from './data';

export default () => {
  const store = createStore(reducers, initialState);
  return store;
};