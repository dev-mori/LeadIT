import {
	ADD_DOTS,
	CREATE_DOTS,
	EDIT_DOTS,
	DELETE_DOTS,
} from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_DOTS:
			return 1;
		case CREATE_DOTS:
			return 1;
		case EDIT_DOTS:
			return 1;
		case DELETE_DOTS:
			return 1;
		default:
			return state;
	}
};
