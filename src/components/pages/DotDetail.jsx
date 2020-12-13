import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../firebase/firebase";
import Header from "../templates/Header/Header";
import Footer from "../templates/Footer/Footer";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar"; //ひとまずのimport
import { makeStyles } from "@material-ui/core/styles";
import calendarImg from "../pages/img/calendar.png";
import clockImg from "../pages/img/alarm-clock.png";

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));


const INNER = styled.div`
	display: flex;
	width: 60%;
	margin: auto;
	padding: 6% 2%;
`;

const DETAIL_WRAPPER = styled.div`
	padding-left: 8%;
`;

const TEXT = styled.div`
	font-size: 1.2rem;
  height: 65%;
  padding-bottom: 10%;
`;

const IMG_WRAPPER = styled.div`
  width: 100%;
	padding-bottom: 10%;
`;

const IMG = styled.img`
	width: 55px;
	padding-right: 2%;
`;

const P = styled.p`
	font-size: 1.2rem;
`;

export default function DotDetail() {
	const { id } = useParams();
	const [dot, set_dot] = useState();
	const classes = useStyles();

	// const dot = firebase
	//   .firestore()
	//   .collection("dots")
	//   .doc(id)
	//   .get()
	//   .then((doc) => {
	//     console.log(doc.data().title);
	//     return doc.data();
	//     // set_dot(doc.data());
	//   });
	// console.log(dot.handleFulfilled(value));

	// .then((doc) => {
	//   return doc;
	// });
	useEffect(() => {
		firebase
			.firestore()
			.collection("dots")
			.onSnapshot((snapshot) => {
				const dots = snapshot.docs.map((doc) => {
					return doc.data();
				});
				set_dot(dots.find((dot) => dot.dotId == id));
			});
	}, []);

	const render_workTime = () => {
		if (dot) {
			const createdAt = new Date(dot.createdAt.seconds * 1000);
			const year = createdAt.getFullYear();
			const month = createdAt.getMonth() + 1;
			const date = createdAt.getDate();
			const hour = createdAt.getHours();
			const minute = createdAt.getMinutes();
			console.log(year);
			// return dot.working + "h";
			return (
				year +
				"/" +
				month +
				"/" +
				date +
				"の勉強時間" +
				"：" +
				dot.working +
				" 時間"
			);
		}
	};

	return (

			<div style={{height: "10vh" }}>
			<Header />
				<INNER>
					<diV>
						<Avatar src="/broken-image.jpg" className={classes.large} />
					</diV>
					<DETAIL_WRAPPER>
						<TEXT>
							今日はテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
							勉強時間は?時間だった。
							今日の勉強で？？？の記事(URL)が役に立った。
						</TEXT>
						<IMG_WRAPPER>
							<IMG
								src={calendarImg}
								title="カレンダー"
								alt="カレンダーのアイコン "
								align="middle"
							/>
							{render_workTime()}
						</IMG_WRAPPER>

						<IMG_WRAPPER>
							<IMG
								src={clockImg}
								title="時計"
								alt="時計のアイコン"
								align="middle"
							/>
							今週の合計勉強時間：30時間
						</IMG_WRAPPER>

						{/* {dot && <p>title : {dot.title}</p>}
						{dot && <p>tag : {dot.tag}</p>}
						{dot && <p>url : {dot.url}</p>}
						{dot && <p>working : {dot.working}</p>}
						{dot && <p>text : {dot.text}</p>} */}
					</DETAIL_WRAPPER>
				</INNER>
      <Footer />
			</div>
	);
}
