import * as Actions from "./action";
import initialState from "../store/initialState";

export const StarReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.FETCH_TODAY_DOT_LENGTH:
			return action.payload;
		case Actions.SET_STAR:
			return 1;
		case Actions.UNSET_STAR:
			return 0;

		default:
			return state;
	}
};
