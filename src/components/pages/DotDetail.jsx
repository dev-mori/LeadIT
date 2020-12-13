import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delete_dot } from "../../reducks/dots/action";
import { fetch_todayDotLength } from "../../reducks/star/action";
import firebase from "../../firebase/firebase";
import { AuthContext } from "../../firebase/AuthService";
import Header from "../templates/Header/Header";
import Footer from "../templates/Footer/Footer";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar"; //ひとまずのimport
import { makeStyles } from "@material-ui/core/styles";
import calendarImg from "../pages/img/calendar.png";
import clockImg from "../pages/img/alarm-clock.png";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

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
const TAGS = styled.div`
  font-size: 1.2rem;
  height: 50px;
`;
const IMG_WRAPPER = styled.div`
  width: 100%;
  // padding-bottom: 10%;
`;

const IMG = styled.img`
  width: 55px;
  padding-right: 2%;
`;

const P = styled.p`
  font-size: 1.2rem;
`;

export default function DotDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useContext(AuthContext);
  const [dot, set_dot] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection("dots")
      .get()
      .then((data) => {
        const dots = data.docs.map((doc) => {
          return doc.data();
        });
        set_dot(dots.find((dot) => dot.dotId == id));
      });
  }, []);

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

  const onEdit_click = () => {
    console.log("edit click");
  };

  const onDelete_click = () => {
    console.log(dot);
    firebase
      .firestore()
      .collection("dots")
      .doc(dot.dotId)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        dispatch(delete_dot(dot));
        history.push("/");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  const show_editAndDeleteButtons = () => {
    if (user && dot && user.uid === dot.userId) {
      return (
        <div style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            style={{ left: "92%" }}
            onClick={onEdit_click}
          >
            編集
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            style={{ left: "100%" }}
            onClick={onDelete_click}
          >
            消去
          </Button>
        </div>
      );
    }
  };

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

  const render_workTime = () => {
    if (dot) {
      const createdAt = new Date(dot.createdAt.seconds * 1000);
      const year = createdAt.getFullYear();
      const month = createdAt.getMonth() + 1;
      const date = createdAt.getDate();
      const hour = createdAt.getHours();
      const minute = createdAt.getMinutes();
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
    <div style={{ height: "10vh" }}>
      <Header />
      <INNER>
        <diV>
          <Avatar src="/broken-image.jpg" className={classes.large} />
        </diV>
        <DETAIL_WRAPPER>
          <TEXT>
            今日はテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            勉強時間は?時間だった。 今日の勉強で？？？の記事(URL)が役に立った。
          </TEXT>
          <TAGS>
            Tags :
            {dot &&
              dot.tags.map((tag) => {
                return `${tag} / `;
              })}
          </TAGS>
          <IMG_WRAPPER style={{ paddingBottom: "10%" }}>
            <IMG
              src={calendarImg}
              title="カレンダー"
              alt="カレンダーのアイコン "
              align="middle"
            />
            {render_workTime()}
          </IMG_WRAPPER>

          <IMG_WRAPPER style={{ paddingBottom: "2%" }}>
            <IMG
              src={clockImg}
              title="時計"
              alt="時計のアイコン"
              align="middle"
            />
            今週の合計勉強時間：30時間
          </IMG_WRAPPER>
          <span>{show_editAndDeleteButtons()}</span>

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
