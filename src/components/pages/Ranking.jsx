import React, { useEffect, useState, useContext } from "react";
import firebase from "../../firebase/firebase";
import Header from "../templates/Header/Header";

const Ranking = () => {
  const db = firebase.firestore().collection("dots");
  const [one, setOne] = useState("");
  const [oneHours, setOneHours] = useState("");
  const [two, setTwo] = useState("");
  const [twoHours, setTwoHours] = useState("");
  const [three, setThree] = useState("");
  const [threeHours, setThreeHours] = useState("");

  const zeroAdjust = () => {
    let agoDate = new Date();
    let agoWeek = agoDate.setDate(agoDate.getDate() - 6);
    let hope = new Date(agoWeek);
    let zero = hope.setHours(0);
    let one = new Date(zero);
    let two = one.setMinutes(0);
    let three = new Date(two);
    let four = three.setSeconds(0);
    let five = new Date(four);
    return five;
  };

  const hoge = [];
  let item = [];
  useEffect(() => {
    db.where(
      "createdAt",
      ">",
      firebase.firestore.Timestamp.fromDate(zeroAdjust())
    )
      .get()
      .then((data) => {
        data.docs.map((doc) => {
          const item = doc.data();
          hoge.push(item);
        });
        const group = hoge.reduce((result, current) => {
          const element = result.find((p) => p.userId === current.userId);
          if (element) {
            element.working += current.working;
          } else {
            result.push({
              userId: current.userId,
              working: current.working,
            });
          }
          return result;
        }, []);
        group.sort(function (a, b) {
          if (a.working < b.working) return 1;
          if (a.working > b.working) return -1;
          return 0;
        });
        const one = group[0].userId;
        setOne(one);
        const oneHours = group[0].working;
        setOneHours(oneHours);
        const two = group[1].userId;
        setTwo(two);
        const twoHours = group[1].working;
        setTwoHours(twoHours);
        const three = group[2].userId;
        setThree(three);
        const threeHours = group[2].working;
        setThreeHours(threeHours);
        console.log(group);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <Header /> */}
      <h1>Ranking 👑</h1>
      <p>
        🥇1st:{one} {oneHours}
        <br />
        🥈2st:{two} {twoHours}
        <br />
        🥉3st:{three} {threeHours}
      </p>
    </div>
  );
};

export default Ranking;
