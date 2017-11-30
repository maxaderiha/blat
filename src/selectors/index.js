import {createSelector} from 'reselect';
import {mapToArr} from '../utils/transform-collections';


const articlesGetter = state => state.articles.entities;
const idGetter = (state, props) => props._id;

export const articlesSelector = createSelector(articlesGetter, (articles) => {
    return mapToArr(articles);
});

export const articlesSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id) => {
    return articles.get(id);
});