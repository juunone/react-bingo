import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

export default function configureStore(initialState={}) {
  /* dev redux logger setting */
  let log = [];
  if(
    window.location &&
    window.location.host &&
    window.location.host.indexOf('localhost') !== -1){
      const { logger } = require("redux-logger");
      log.push(logger);
  }
  /* dev redux logger setting */

  return createStore(
    rootReducer,
    applyMiddleware(...log)
  );
}