import * as Actions from "./action";
import initialState from "../store/initialState";

export const DotReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.ADD_DOT:
			return [...state, action.payload];
		default:
			return state;
	}
};