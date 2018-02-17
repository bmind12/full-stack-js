import { CONVERT_INPUT, CONVERT_INPUT_FAILURE, CONVERT_INPUT_SUCCESS } from '../AC/convertion';
import axios from 'axios';

export default store => next => action => {
    const { type, value } = action;

    if (type !== CONVERT_INPUT) return next(action);

    const api = 'http://localhost:8000/convertor';
    const config = {
        params: {
            value
        }
    }

    axios.get(api, config)
        .then((response) => {
            next({
                ...action,
                type: CONVERT_INPUT_SUCCESS,
                payload: {
                    words: response.data
                }
            })
        })
        .catch(() => {
            next({
                ...action,
                type: CONVERT_INPUT_FAILURE
            })
        });
}
