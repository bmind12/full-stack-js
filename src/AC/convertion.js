export const CONVERT_INPUT = 'CONVERT_INPUT';
export const CONVERT_INPUT_FAILURE = 'CONVERT_INPUT_FAILURE';
export const CONVERT_INPUT_SUCCESS = 'CONVERT_INPUT_SUCCESS';

export const convertInput = (value) => {
    return {
        type: CONVERT_INPUT,
        value
    }
}
