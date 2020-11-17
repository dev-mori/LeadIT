import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase/firebase";
import List from "@material-ui/core/List";
import Dots from "./Dots";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "50vh",
		maxWidth: 400,
		backgroundColor: theme.palette.background.paper,
		margin: "auto",
		marginTop: 10,
		position: "relative",
	},
	primary: {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
	addButton: {
		fontSize: 30,
		position: "fixed",
		right: "0%",
		bottom: "7%",
	},
}));

const MiniDots = (props) => {
	console.log(props);
	// const [dots, setDots] = useState([]);
	const classes = useStyles();
	// useEffect(() => {
	// 	firebase
	// 		.firestore()
	// 		.collection("dots")
	// 		.onSnapshot((snapshot) => {
	// 			setDots(
	// 				snapshot.docs.map((doc) => {
	// 					return doc.data();
	// 				})
	// 			);
	// 		});
	// }, []);

	const list_dotsData = () => {
		const DOTS_DATA = props.dots.undefined;
		console.log("from list_dotsData" + DOTS_DATA);
		if (DOTS_DATA) {
			DOTS_DATA.map((DOT_DATA) => {
				return <Dots dot={DOT_DATA} key={DOT_DATA.dotId} />;
			});
		} else {
			return <div>list dotsData is working!</div>;
		}
	};

	return (
		<>
			<div className={classes.root}>
				<List component="nav">
					{list_dotsData}
					{/* 👉消す */}
					{/* {dots.map((dot) => {
						return <Dots dot={dot} key={dot.dotId} />; */}
					{/* })} */}
				</List>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return { dots: state.dots };
};

export default connect(mapStateToProps)(MiniDots);
