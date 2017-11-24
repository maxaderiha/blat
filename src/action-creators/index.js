import {
    LOAD_ARTICLES,
    LOAD_MORE_ARTICLES,
} from '../constants';


export function loadArticles(skip = 0, top = 10) {
    return {
        type: LOAD_ARTICLES,
        callAPI: `/news?top=${top}&skip=${skip}`,
    };
}

export function loadMoreArticles(skip = 0, top = 10) {
    return {
        type: LOAD_MORE_ARTICLES,
        callAPI: `/news?top=${top}&skip=${skip}`,
    };
}
