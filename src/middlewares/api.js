import {
    START,
    SUCCESS,
    FAIL,
    SERVER,
} from '../constants';


export default store => next => action => {
    const {type, payload, ...rest} = action;
    const {callAPI, body} = payload;
    if (!callAPI) return next(action);

    next({
        ...rest,
        type: type + START,
    });

    fetch(`${SERVER}${callAPI}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then(res => res.status === 200 ? res.json() : res.status)
        .then(response => next({...rest, type: type + SUCCESS, response}))
        .catch(err => next({...rest, type: type + FAIL, err}));
}