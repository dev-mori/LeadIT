import React, { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";
import BarChart from "../templates/graph/BarChart";
import MiniDots from "../templates/MiniDots";
import MiniForm from "../templates/MiniForm";
import Dots from "../templates/Dots";
import { AuthContext } from "../../firebase/AuthService";
import firebase from "../../firebase/firebase";
import { fetch_todayDotLength } from "../../reducks/star/action";

import { red } from "@material-ui/core/colors";
// import UserIcon from "../templates/icons/user/user";

export default function Base() {
	const dispatch = useDispatch();
	const user = useContext(AuthContext);

	const get_todayMidnight = () => {
		const TODAY_MIDNIGHT = new Date();
		TODAY_MIDNIGHT.setHours(0);
		TODAY_MIDNIGHT.setMinutes(0);
		return TODAY_MIDNIGHT.setSeconds(0);
	};

	const logout = () => {
		firebase.auth().signOut();
	};

	useEffect(() => {
		firebase
			.firestore()
			.collection("dots")
			.where("userId", "==", user.uid)
			.where("createdAt", ">=", new Date(get_todayMidnight()))
			.get()
			.then((data) => {
				const todayDot = data.docs.map((doc) => {
					return doc.data();
				});
				// 👇消す
				console.log(todayDot.length)
				dispatch(fetch_todayDotLength(todayDot.length));
			});
	}, []);

	return (
		<React.Fragment>
			<Header />
			<div>Index</div>
			<button style={{ width: "100px", height: "30px" }} onClick={logout}>
				ログアウト
			</button>
			<MiniForm />
			<MiniDots />
			<BarChart />
			{/* <UserIcon /> */}
			<Footer />
		</React.Fragment>
	);
}
