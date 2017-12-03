import {
    SERVER,
    LOAD_ARTICLE,
    LOAD_ARTICLES,
    LOAD_MORE_ARTICLES,
    START,
    SUCCESS,
    FAIL,
} from '../constants';


export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id},
        });

        fetch(`${SERVER}/article?id=${id}&projection=content&projection=images`)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(response => {
                dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {response, id},
                })
            })
            .catch(error => {
                dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: {error, id},
                })
            })
    }
}

export function loadArticles(skip = 0, top = 5, isMore = false) {
    const type = isMore ? LOAD_MORE_ARTICLES : LOAD_ARTICLES;

    const body = {
        projection: {
            images: 0,
            content: 0,
        },
    };

    return (dispatch) => {
        dispatch({
            type: type + START,
        });

        fetch(`${SERVER}/articles?top=${top}&skip=${skip}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(res => {
                if (res.status >= 400) {
                    debugger;
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(response => {
                dispatch({
                    type: type + SUCCESS,
                    payload: {response},
                })
            })
            .catch(error => {
                dispatch({
                    type: type + FAIL,
                    payload: {error},
                })
            })
    }
}
