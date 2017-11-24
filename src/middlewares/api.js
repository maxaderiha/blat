import {
    START,
    SUCCESS,
    FAIL,
    SERVER,
} from '../constants';


export default store => next => action => {
    const {type, callAPI, ...rest} = action;
    if (!callAPI) return next(action);

    next({
        ...rest,
        type: type + START,
    });

    setTimeout(() => {
        fetch(`${SERVER}${callAPI}`)
            .then(res => res.json())
            .then(response => next({...rest, type: type + SUCCESS, response}))
            .catch(err => {
                next({...rest, type: type + FAIL, err});
            });
    }, 2000);
}