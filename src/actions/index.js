import { ADD_DOTS, CREATE_DOTS, EDIT_DOTS, DELETE_DOTS } from "./types";

export const addDots = (text) => {
	return {
		type: ADD_DOTS,
		payload: text,
	};
};

export const createDots = () => {
	return {
		type: CREATE_DOTS,
	};
};

export const editDots = () => {
	return {
		type: EDIT_DOTS,
	};
};

export const deleteDots = () => {
	return {
		type: DELETE_DOTS,
	};
};
