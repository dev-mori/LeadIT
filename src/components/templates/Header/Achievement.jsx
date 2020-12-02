import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/AuthService";
import firebase from "../../../firebase/firebase";
import startImg from "../../pages/img/star.png";
import blackStarImg from "../../pages/img/blackstar.png";

export default function Achievement() {
	const [todayDot, set_todayDot] = useState(null);
	const user = useContext(AuthContext);

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
			.where("userId", "==", user.uid)
			.where("createdAt", ">=", new Date(get_todayMidnight()))
			.onSnapshot((snapshot) => {
				const todayDot = snapshot.docs.map((doc) => {
					return doc.data();
				});
				// SeyStarのaction呼ぶ。
				// そこにlengthを入れる
				// lengthがあるとき ＝ true
				// true だったら☆
				set_todayDot(todayDot);
			});
	}, []);

	const show_star = () => {
		if (todayDot && todayDot.length) {
			return <img src={startImg} style={{ width: "55px" }}></img>;
		} else {
			return <img src={blackStarImg} style={{ width: "55px" }}></img>;
		}
	};

	return <div>{show_star()}</div>;
}
