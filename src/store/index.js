import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index';

import api from '../middlewares/api';
import logger from '../middlewares/logger';


const enhancer = applyMiddleware(api, logger);

export default store = createStore(reducer, {}, enhancer);