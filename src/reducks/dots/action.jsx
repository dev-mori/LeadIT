export const FETCH_DOTS = "FETCH_DOTS";
export const fetch_dots = (dots) => {
	return {
		type: FETCH_DOTS,
		payload: dots,
	};
};

export const ADD_DOT = "ADD_DOT";
export const add_dot = (dot) => {
	return {
		type: ADD_DOT,
		payload: dot,
	};
};

export const DELETE_DOT = "DELETE_DOT";
export const delete_dot = (dot) => {
	return {
		type: DELETE_DOT,
		payload: dot,
	};
};
