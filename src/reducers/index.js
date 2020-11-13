import { combineReducers } from "redux";
import dotsReducer from "./dotsReducer";

export default combineReducers({
	dots: dotsReducer,
});
