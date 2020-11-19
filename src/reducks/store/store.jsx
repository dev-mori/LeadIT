import { createStore as reduxCreateStore, combineReducers } from "redux";
import { DotReducer } from "../dots/reducers";

export default function createStore() {
	return reduxCreateStore(
		combineReducers({
			dots: DotReducer,
		})
	);
}
