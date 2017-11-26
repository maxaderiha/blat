import {
    FAIL,
    LOAD_ARTICLES, LOAD_MORE_ARTICLES,
    START,
    SUCCESS,
} from '../constants';
import {OrderedMap, Record} from 'immutable';
import {arrToMap} from '../utils';


const ArticleRecord = Record({
    _id: undefined,
    date: undefined,
    title: undefined,
    img: undefined,
    images: undefined,
    description: undefined,
    content: undefined,
    tags: undefined,
});

const ReducerState = new Record({
    loading: false,
    loadedAll: false,
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
                .set('loadedAll', false)
                .set('entities', arrToMap(response, ArticleRecord));

        // case LOAD_MORE_ARTICLES + START:

        case LOAD_MORE_ARTICLES + SUCCESS:
            if (response === 404) {
                return articlesState.set('loadedAll', true);
            }
            return articlesState
                .update('entities', loadedArticles => loadedArticles.merge(arrToMap(response, ArticleRecord)));

        // case LOAD_MORE_ARTICLES + FAIL:

        default:
            return articlesState;
    }
}