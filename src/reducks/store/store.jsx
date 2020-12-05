import {
	createStore as reduxCreateStore,
	combineReducers,
	compose,
	applyMiddleware,
} from "redux";
import { DotReducer } from "../dots/reducer";
import { StarReducer } from "../star/reducer";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Redux DevToolsを使うために定義
export default function createStore() {
	return reduxCreateStore(
		combineReducers({
			dots: DotReducer,
			star: StarReducer,
		}),
		composeEnhancers(applyMiddleware(reduxThunk))
	);
}
