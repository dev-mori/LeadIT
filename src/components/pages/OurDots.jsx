import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Header from "../templates/Header/Header.jsx";
import Footer from "../templates/Footer/Footer.jsx";
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

const bodyStyle = {
  display: "flex",
}


export default function OurDots  () {
  const dots = useSelector((state) => state.dots);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <div className="MainBody" style={bodyStyle}>
      <div >
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
        <div className={classes.root}>
          <List component="nav">
            {dots.map((dot) => {
              return <Dots dot={dot} key={dot.dotId} />;
            })}
          </List>
        </div>
    </div>
      <Footer />
    </React.Fragment>

  );
};

