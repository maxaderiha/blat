import {
    START,
    SUCCESS,
    FAIL,
    SERVER,
} from '../constants';


export default store => next => action => {
    const {type, payload, ...rest} = action;
    const {callAPI, body, method} = payload;
    if (!callAPI) return next(action);

    next({
        ...rest,
        payload,
        type: type + START,
    });

    setTimeout(() => {
        fetch(`${SERVER}${callAPI}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(res => {
                return res.status === 200 ? res.json() : res.status
            })
            .then(response => next({...rest, payload, type: type + SUCCESS, response}))
            .catch(err => next({...rest, payload, type: type + FAIL, err}));
    }, 2000);
}