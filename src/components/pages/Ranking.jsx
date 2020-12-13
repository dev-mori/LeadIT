import React, { useEffect, useState, useContext } from "react";
import firebase from "../../firebase/firebase";
import Header from "../templates/Header/Header";

const Ranking = () => {
  const db = firebase.firestore().collection("dots");
  const [dots, setDots] = useState([]);

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
        // let item = data.docs;
        // console.log(item);
        data.docs.map((doc) => {
          const item = doc.data();
          // item.push(doc.data());
          // console.log(item);
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
        const two = group[1].userId;
        const three = group[2].userId;
        console.log(group);
        // const huga = item.map((el) => el.userId);
        // console.log(huga);
      });
  }, []);
  // console.log(hoge);
  // if (hoge === []) {
  //   console.log(hoge);
  // } else {
  //   console.log("入っているよ");
  // }

  // const group = hoge.reduce((result, current) => {
  //   const element = result.find((p) => p.userId === current.userId);
  //   if (element) {
  //     element.working += current.working;
  //   } else {
  //     result.push({
  //       userId: current.userId,
  //       working: current.working,
  //     });
  //   }
  //   return result;
  // }, []);
  // console.log(group);
  // group.sort(function (a, b) {
  //   if (a.working < b.working) return 1;
  //   if (a.working > b.working) return -1;
  //   return 0;
  // });
  // console.log(group);
  // const one = group[0].userId;
  // const two = group[1].userId;
  // const three = group[2].userId;

  return (
    <div>
      {/* <Header /> */}
      <h1>Hello</h1>
    </div>
  );
};

export default Ranking;
