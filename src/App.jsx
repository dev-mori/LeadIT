import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetch_dot } from "./reducks/dots/action";
import { fetch_today_dot } from "./reducks/star/action";
import Base from "./components/pages/Base";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import MyDots from "./components/pages/MyDots";
import DotDetail from "./components/pages/DotDetail";
import Form from "./components/pages/Form";
import firebase from "./firebase/firebase";
import { AuthProvider } from "./firebase/AuthService";
import { AuthContext } from "./firebase/AuthService";
import LoggedInRoute from "./firebase/LoggedInRoute";

// import Form from "./components/pages/Form";

export default function App() {
	const dispatch = useDispatch();
	const user = useContext(AuthContext);
	console.log(user)

	const get_todayMidnight = () => {
		const TODAY_MIDNIGHT = new Date();
		TODAY_MIDNIGHT.setHours(0);
		TODAY_MIDNIGHT.setMinutes(0);
		return TODAY_MIDNIGHT.setSeconds(0);
	};

	useEffect(() => {
		firebase
			.firestore()
			.collection("dots")
			.get()
			.then((data) => {
				const RESPONSE = data.docs.map((doc) => {
					return doc.data();
				});
				dispatch(fetch_dot(RESPONSE));
			});

		// firebase
		// 	.firestore()
		// 	.collection("dots")
		// 	.where("userId", "==", user.uid)
		// 	.where("createdAt", ">=", new Date(get_todayMidnight()))
		// 	.onSnapshot((snapshot) => {
		// 		const todayDot = snapshot.docs.map((doc) => {
		// 			return doc.data();
		// 		});
		// 		dispatch(fetch_today_dot(todayDot))
		// 	});
	}, []);

	return (
		<AuthProvider>
			<Router>
				<Switch>
					<LoggedInRoute exact path="/" component={Base} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/mydots" component={MyDots} />
					<Route exact path="/form" component={Form} />
					<Route exact path="/dot/:id" component={DotDetail} />
				</Switch>
			</Router>
		</AuthProvider>
	);
}
