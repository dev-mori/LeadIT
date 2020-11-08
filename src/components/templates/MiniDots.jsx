import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Dots from "./Dots";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
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
  const classes = useStyles();
  const dots = [
    { id: 1, title: "sampletitle1", text: "sampletext1" },
    { id: 2, title: "sampletitle2", text: "sampletext2" },
    { id: 3, title: "sampletitle3", text: "sampletext3" },
  ];
  return (
    <>
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
