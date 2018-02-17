// import { CONVERT_INPUT } from '../AC/convertion';

const defaultConvertion = 'Please enter a number and press convert to see output.';

export default (convertion = defaultConvertion, action) => {
    const { type } = action;

	switch(type) {
		default: {
			return convertion;
		}
	}
}
