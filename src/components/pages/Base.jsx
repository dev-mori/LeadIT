import React from "react";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";
import BarChart from "../templates/graph/BarChart";
import MiniDots from "../templates/MiniDots";
import MiniForm from "../templates/MiniForm";
import Dots from "../templates/Dots";
import { useSelector } from "react-redux";
// import UserIcon from "../templates/icons/user/user";

export default function Base() {
	const dots = useSelector((state) => state.dots);
	// console.log(dots);
	return (
		<React.Fragment>
			<Header />
			{dots.map((dot) => {
				return <Dots dot={dot} />;
			})}
			<div>Index</div>
			<MiniForm />
			<MiniDots />
			<BarChart />
			{/* <UserIcon /> */}
			<Footer />
		</React.Fragment>
	);
}
