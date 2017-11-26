import {
    LOAD_ARTICLE,
    LOAD_ARTICLES,
    LOAD_MORE_ARTICLES,
} from '../constants';


export function loadArticle(id) {
    return {
        type: LOAD_ARTICLE,
        payload: {
            callAPI: `/articles/detailed-view?id=${id}`,
            body: {
                date: 0,
                title: 0,
                img: 0,
                description: 0,
                tags: 0,
            },
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
        },
    };
}
