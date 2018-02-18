import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const enhancer = applyMiddleware(thunk, logger);

export default createStore(reducers, {}, enhancer);
