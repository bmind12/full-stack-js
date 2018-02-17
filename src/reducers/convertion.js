import {
    CONVERT_INPUT,
    CONVERT_INPUT_FAILURE,
    CONVERT_INPUT_SUCCESS,
    CONVERT_RESET
} from '../AC/convertion';

const defaultConvertion = 'Please enter a number, which represents an animal and press convert to see output.';

export default (convertion = defaultConvertion, action) => {
    const { type, payload } = action;

    switch(type) {
        case CONVERT_INPUT: {
            return 'Loading...';
        }

        case CONVERT_INPUT_FAILURE: {
            return 'Convertion failed, some problem with server occured.';
        }

        case CONVERT_INPUT_SUCCESS: {
            return payload.words;
        }

        case CONVERT_RESET: {
            return defaultConvertion;
        }

		default: {
			return convertion;
		}
	}
}
