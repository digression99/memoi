import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'styles.css';
import App from 'components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
