import {combineReducers} from 'redux';
import articlesReducer from './articles';
import articleDetailsReducer from './aricleDetails';


export default combineReducers({
    articles: articlesReducer,
    // articleDetails: articleDetailsReducer,
});