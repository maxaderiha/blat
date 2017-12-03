import {
    FAIL,
    LOAD_ARTICLE,
    LOAD_ARTICLES,
    LOAD_MORE_ARTICLES,
    START,
    SUCCESS,
} from '../constants';
import {OrderedMap, Record} from 'immutable';
import {arrToMap} from '../utils/transform-collections';


const ArticleRecord = Record({
    _id: undefined,
    date: undefined,
    title: undefined,
    img: undefined,
    description: undefined,
    tags: undefined,
    images: undefined,
    content: undefined,
    loading: false,
    loaded: false,
    error: undefined,
});

const ReducerState = new Record({
    total: 10,
    loading: false,
    entities: new OrderedMap({}),
    error: undefined,
});

const defaultArticlesState = ReducerState();

export default (articlesState = defaultArticlesState, action) => {
    const {type, payload} = action;
    debugger;
    switch (type) {
        case LOAD_ARTICLES + START:
            return articlesState.set('loading', true);

        case LOAD_ARTICLES + SUCCESS:
        case LOAD_MORE_ARTICLES + SUCCESS:
            return articlesState
                .set('loading', false)
                .update('entities', entities => entities.merge(arrToMap(payload.response, ArticleRecord)));

        case LOAD_ARTICLES + FAIL:
        case LOAD_MORE_ARTICLES + FAIL:
            return articlesState
                .set('loading', false)
                .set('error', payload.error.message);

        case LOAD_ARTICLE + START:
            return articlesState.setIn(['entities', payload.id, 'loading'], true);

        case LOAD_ARTICLE + SUCCESS:
            return articlesState
                .setIn(['entities', payload.id, 'loading'], false)
                .setIn(['entities', payload.id, 'loaded'], true)
                .setIn(['entities', payload.id, 'images'], payload.response.images)
                .setIn(['entities', payload.id, 'content'], payload.response.content);

        case LOAD_ARTICLE + FAIL:
            return articlesState
                .setIn(['entities', payload.id, 'loading'], false)
                .setIn(['entities', payload.id, 'error'], payload.error.message);

        default:
            return articlesState;
    }
}