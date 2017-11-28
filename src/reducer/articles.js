import {
    FAIL,
    LOAD_ARTICLE,
    LOAD_ARTICLES,
    LOAD_MORE_ARTICLES,
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
    description: undefined,
    tags: undefined,
    images: undefined,
    content: undefined,
    loading: false,
    loaded: false,
    error: false,
});

const ReducerState = new Record({
    loading: false,
    loadedAll: false,
    entities: new OrderedMap({}),
});

const defaultArticlesState = ReducerState();

export default (articlesState = defaultArticlesState, action) => {
    const {type, payload, response} = action;

    debugger;
    switch (type) {
        case LOAD_ARTICLES + START:
            return articlesState.set('loading', true);

        case LOAD_ARTICLES + SUCCESS:
            return articlesState
                .set('loading', false)
                .set('loadedAll', false)
                .set('entities', arrToMap(response, ArticleRecord));

        case LOAD_MORE_ARTICLES + SUCCESS:
            if (response === 404) {
                return articlesState.set('loadedAll', true);
            }
            return articlesState
                .update('entities', loadedArticles => loadedArticles.merge(arrToMap(response, ArticleRecord)));

        case LOAD_ARTICLE + START:
            return articlesState.setIn(['entities', payload.id, 'loading'], true);

        case LOAD_ARTICLE + SUCCESS:
            // if (typeof response === 'number') {
            //     return articlesState
            //         .setIn(['entities', payload.id, 'loading'], false)
            //         .setIn(['entities', payload.id, 'error'], response);
            // }
            return articlesState
                .setIn(['entities', payload.id, 'loading'], false)
                .setIn(['entities', payload.id, 'loaded'], true)
                .setIn(['entities', payload.id, 'images'], response.images)
                .setIn(['entities', payload.id, 'content'], response.content);

        default:
            return articlesState;
    }
}