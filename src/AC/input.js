export const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateInput = (value) => {
	return {
        type: UPDATE_INPUT,
        payload: {
            value
        }
	}
}
