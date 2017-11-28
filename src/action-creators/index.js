import {
    LOAD_ARTICLE,
    LOAD_ARTICLES,
    LOAD_MORE_ARTICLES,
} from '../constants';


export function loadArticle(id) {
    return {
        type: LOAD_ARTICLE,
        payload: {
            callAPI: `/article?id=${id}&projection=content&projection=images`,
            id,
            method: 'GET',
        },
    }
}

export function loadArticles(skip = 0, top = 5) {
    return {
        type: LOAD_ARTICLES,
        payload: {
            callAPI: `/articles?top=${top}&skip=${skip}`,
            body: {
                projection: {
                    images: 0,
                    content: 0,
                },
            },
            method: 'PUT',
        },
    };
}

export function loadMoreArticles(skip = 0, top = 5) {
    return {
        type: LOAD_MORE_ARTICLES,
        payload: {
            callAPI: `/articles?top=${top}&skip=${skip}`,
            body: {
                projection: {
                    images: 0,
                    content: 0,
                },
            },
            method: 'PUT',
        },
    };
}
