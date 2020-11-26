import { createStore as reduxCreateStore, combineReducers, compose, applyMiddleware } from "redux";
import { DotReducer } from "../dots/reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Redux DevToolsを使うために定義
export default function createStore() {
	return reduxCreateStore(
		combineReducers({
			dots: DotReducer,
		}),
		composeEnhancers(applyMiddleware(reduxThunk))
	);
}
