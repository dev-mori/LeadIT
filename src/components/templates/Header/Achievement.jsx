import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthService";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { set_star } from "../../../reducks/star/action";
import firebase from "../../../firebase/firebase";
import startImg from "../../pages/img/star.png";
import blackStarImg from "../../pages/img/blackstar.png";

export default function Achievement() {
	const [todayDot, set_todayDot] = useState(null);
	const user = useContext(AuthContext);
	const dispatch = useDispatch();
	const star = useSelector((state) => state.star);
	// 👇消す
	console.log(star);

	const get_todayMidnight = () => {
		const TODAY_MIDNIGHT = new Date();
		TODAY_MIDNIGHT.setHours(0);
		TODAY_MIDNIGHT.setMinutes(0);
		return TODAY_MIDNIGHT.setSeconds(0);
	};

	// useEffect(() => {
	// 	firebase
	// 		.firestore()
	// 		.collection("dots")
	// 		.where("userId", "==", user.uid)
	// 		.where("createdAt", ">=", new Date(get_todayMidnight()))
	// 		.onSnapshot((snapshot) => {
	// 			const todayDot = snapshot.docs.map((doc) => {
	// 				return doc.data();
	// 			});
	// 			dispatch(set_star(todayDot.length));
	// 		});
	// }, []);

	const show_star = () => {
		if (star > 0) {
			return <img src={startImg} style={{ width: "55px" }}></img>;
		} else {
			return <img src={blackStarImg} style={{ width: "55px" }}></img>;
		}
	};
	// return <div> ★　</div>;

	return <div> {show_star()} </div>;
}
