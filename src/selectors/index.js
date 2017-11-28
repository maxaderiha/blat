import {createSelector} from 'reselect';
import {mapToArr} from '../utils';


const articlesGetter = state => state.articles.entities;
const idGetter = (state, props) => {
    debugger;
    return props._id;
};

export const articlesSelector = createSelector(articlesGetter, (articles) => {
    return mapToArr(articles);
});

export const articlesSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id) => {
    debugger;
    return articles.get(id);
});