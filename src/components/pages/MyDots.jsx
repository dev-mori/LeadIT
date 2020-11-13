import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../../firebase/firebase";
import List from "@material-ui/core/List";
import Dots from "../templates/Dots";

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

export default function MiniDots() {
  const [dots, setDots] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    firebase
      .firestore()
      .collection("dots")
      .onSnapshot((snapshot) => {
        setDots(
          snapshot.docs.map((doc) => {
            return doc.data();
          })
        );
      });
  }, []);
  console.log(dots);
  return (
    <>
      <div className={classes.root}>
        <List component="nav">
          {dots.map((dot) => {
            return <Dots dot={dot} />;
          })}
        </List>
      </div>
      <div className={classes.root}>
        <List component="nav">
          {dots.map((dot) => {
            return <Dots dot={dot} />;
          })}
        </List>
      </div>
      
    </>
  );
}
