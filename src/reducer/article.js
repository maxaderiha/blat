import {
    LOAD_ARTICLES, LOAD_MORE_ARTICLES,
    START,
    SUCCESS,
} from '../constants';
import {OrderedMap, Record} from 'immutable';
import {arrToMap} from '../utils';


const ArticleRecord = Record({
    id: undefined,
    date: undefined,
    title: undefined,
    image: undefined,
    description: undefined,
});

const ReducerState = new Record({
    loading: false,
    loadingMore: false,
    loaded: false,
    entities: new OrderedMap({}),
});

const defaultArticlesState = ReducerState();

export default (articlesState = defaultArticlesState, action) => {
    const {type, response} = action;

    switch (type) {
        case LOAD_ARTICLES + START:
            return articlesState.set('loading', true);

        case LOAD_ARTICLES + SUCCESS:
            return articlesState
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response, ArticleRecord, true));

        case LOAD_MORE_ARTICLES + START:
            return articlesState.set('loadingMore', true);

        case LOAD_MORE_ARTICLES + SUCCESS:
            return articlesState
                .set('loadingMore', false)
                .update('entities', loadedArticles => {
                    return loadedArticles.merge(arrToMap(response, ArticleRecord, true));
                });

        default:
            return articlesState;
    }
}