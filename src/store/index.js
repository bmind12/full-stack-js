import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';
import convertNumbers from '../middlewares/convertNumber';

const enhancer = applyMiddleware(convertNumbers, logger);

export default createStore(reducers, {}, enhancer);
