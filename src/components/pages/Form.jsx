import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase/firebase";
import { fetch_todayDotLength } from "../../reducks/star/action";
import { AuthContext } from "../../firebase/AuthService";
import TextField from "@material-ui/core/TextField";
import Header from "../templates/Header/Header.jsx";
import Footer from "../templates/Footer/Footer.jsx";

const useStyles = makeStyles({
	container: {
		width: "400px",
		margin: "0 auto",
	},
	input: {
		width: "343px",
	},
	div: {
		height: "40px",
	},
	text: {
		width: "400px",
	},
});

const bodyStyle = {
	float: "left",
};

const Form = () => {
	const classes = useStyles();
	const user = useContext(AuthContext);
	const star = useSelector((state) => state.star);
	const dispatch = useDispatch();

	// ----今日のdot作ってるか確認------//
	const get_todayMidnight = () => {
		const TODAY_MIDNIGHT = new Date();
		TODAY_MIDNIGHT.setHours(0);
		TODAY_MIDNIGHT.setMinutes(0);
		return TODAY_MIDNIGHT.setSeconds(0);
	};

	if (user) {
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
				dispatch(fetch_todayDotLength(todayDot.length));
			});
	}
	// -----------------------

	const handle_submit = (e) => {
		if (star === 0) {
			e.preventDefault();
			console.log("form submit!");
		}
	};

	return (
		<React.Fragment>
			<Header />
			<div style={bodyStyle}>
				<h1>＃探す</h1>
				<h3>Java</h3>
				<h3>PHP</h3>
				<h3>JavaScript</h3>
				<h3>Python</h3>
				<h3>C++</h3>
				<h3>C#</h3>
				<h3>unity</h3>
				<h3>COBOL</h3>
				<h3>Swift</h3>
			</div>
			<form className={classes.container} onSubmit={handle_submit}>
				<div className={classes.div}> </div>
				{star === 1 ? (
					<p style={{ color: "#e65c00", textAlign: "center" }}>
						今日のdotはすでに作成済みです！
					</p>
				) : (
					""
				)}
				<label>
					<input type="text" name="name" className={classes.input} />
				</label>
				{star === 0 ? <input type="submit" value="Send" /> : ""}
				{/* <input type="submit" value="Send" /> */}
				<div className={classes.div}> </div>

				<div className={classes.div}> </div>
				<select>
					<option value="0.5">0.5</option>
					<option value="1.0">1.0</option>
					<option value="1.5">1.5</option>
					<option value="2.0">2.0</option>
					<option value="2.5">2.5</option>
					<option value="3.0">3.0</option>
					<option value="3.5">3.5</option>
					<option value="4.0">4.0</option>
					<option value="4.5">4.5</option>
					<option value="5.0">5.0</option>
					<option value="5.5">5.5</option>
					<option value="6.0">6.0</option>
					<option value="6.5">6.5</option>
					<option value="7.0">7.0</option>
					<option value="7.5">7.5</option>
					<option value="8.0">8.0</option>
					<option value="8.5">8.5</option>
					<option value="9.0">9.0</option>
					<option value="10">9+</option>
				</select>
				<input className={classes.input}></input>
				<TextField
					id="outlined-multiline-static"
					className={classes.text}
					multiline
					rows={6}
					variant="outlined"
				/>
				<div className={classes.div}> </div>
			</form>
			<Footer />
		</React.Fragment>
	);
};
export default Form;
