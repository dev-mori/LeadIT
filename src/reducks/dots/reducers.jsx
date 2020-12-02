import * as Actions from "./action";
import initialState from "../store/initialState";

export const DotReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.ADD_DOT:
			return [...state, action.payload];
		case Actions.FETCH_DOT:
			return action.payload;
		case Actions.DELETE_DOT:
			return state.filter((dot) => dot !== action.payload);
	

		default:
			return state;
	}
};
