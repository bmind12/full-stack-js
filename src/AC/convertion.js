export const CONVERT_INPUT = 'CONVERT_INPUT';
export const CONVERT_INPUT_FAILURE = 'CONVERT_INPUT_FAILURE';
export const CONVERT_INPUT_SUCCESS = 'CONVERT_INPUT_SUCCESS';
export const CONVERT_RESET = 'CONVERT_RESET';

export const convertInput = (value) => {
    return {
        type: CONVERT_INPUT,
        value
    }
}

export const resetConvertion = () => {
    return {
        type: CONVERT_RESET
    }
}
