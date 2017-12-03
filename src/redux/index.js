import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/index';


const enhancer = applyMiddleware(thunk);

export default store = createStore(reducer, {}, enhancer);