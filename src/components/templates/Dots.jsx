import React from "react";
import { useDispatch } from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import firebase from "../../firebase/firebase";
import { delete_dot } from "../../reducks/dots/action";

const useStyles = makeStyles((theme) => ({
	primary: {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
}));

export default function Dots({ dot }) {
	const classes = useStyles();

	const dispatch = useDispatch();

	const handle_delete = () => {
		// -----画面上からdotを消す-----//
		dispatch(delete_dot(dot));

		// -----firebaseからdotを消す-----//
		firebase
			.firestore()
			.collection("dots")
			.doc(dot.dotId)
			.delete()
			.then(function () {
				console.log("Document successfully deleted!");
			})
			.catch(function (error) {
				console.error("Error removing document: ", error);
			});
	};

	return (
		<div>
			<Link style={{ display: "flex" }} to={`/dot/${dot.dotId}`}>
				<ListItemText
					className={classes.list}
					primary={dot.title}
					classes={{ primary: classes.primary }}
				/>
			</Link>
			<button onClick={handle_delete}>削除</button>
			<Divider />
		</div>
	);
}
