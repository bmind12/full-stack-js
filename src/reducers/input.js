import { UPDATE_INPUT } from '../AC/input';
import { CONVERT_INPUT } from '../AC/input';

export default (input = '', action) => {
    const { type, payload } = action;

	switch(type) {
		case UPDATE_INPUT: {
			return input + payload.value;
		}

		default: {
			return input;
		}
	}
}
