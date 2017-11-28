import {
    FAIL,
    LOAD_ARTICLE,
    LOAD_ARTICLES,
    LOAD_MORE_ARTICLES,
    START,
    SUCCESS,
} from '../constants';
import {Record} from 'immutable';


const ArticleDetailsRecord = Record({
    _id: undefined,
    images: undefined,
    content: undefined,
    loading: false,
    error: false,
});

export default (articleDetailsState = new ArticleDetailsRecord(), action) => {
    const {type, payload, response} = action;
    debugger;
    switch (type) {
        case LOAD_ARTICLE + START:
            return articleDetailsState.set('loading', true);

        case LOAD_ARTICLE + SUCCESS:
            return new ArticleDetailsRecord(response);

        default:
            return articleDetailsState;
    }
}