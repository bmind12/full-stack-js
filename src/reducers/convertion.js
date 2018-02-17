// import { CONVERT_INPUT } from '../AC/convertion';

const defaultConvertion = 'Please enter a number and press convert';

export default (convertion = defaultConvertion, action) => {
    const { type, payload } = action;

	switch(type) {
		default: {
			return convertion;
		}
	}
}
