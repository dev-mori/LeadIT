import React, { useEffect } from "react";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";
import BarChart from "../templates/graph/BarChart";
import MiniDots from "../templates/MiniDots";
import MiniForm from "../templates/MiniForm";
import Dots from "../templates/Dots";
import firebase from "../../firebase/firebase";
import { red } from "@material-ui/core/colors";
// import UserIcon from "../templates/icons/user/user";
import { Bodyleft } from "../templates/Header/HeaderElements";

export default function Base() {
	const logout = () => {
		firebase.auth().signOut();
	};

	return (
		<React.Fragment>	
		<Header />	
			<BarChart />
			<Bodyleft>
			<MiniForm />
			<MiniDots />
			</Bodyleft>
		
			{/* <UserIcon /> */}
			<Footer />
			<div>Index</div>
			<button style={{ width: "100px", height: "30px" }} onClick={logout}>
				ログアウト
			</button>
		</React.Fragment>
	);
}
