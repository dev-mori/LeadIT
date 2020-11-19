import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import App from "./App";
import createStore from "./reducks/store/store";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Redux DevToolsを使うために定義
export const store = createStore(composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
