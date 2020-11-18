import React from "react";
// import { connect } from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  primary: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export default function Dots({ dot }) {
  // console.log("from Dots.jsx" + props);
  const classes = useStyles();
  return (
    <div>
      <Link style={{ display: "flex" }} to={`/dot/${dot.dotId}`}>
        <ListItemText
          className={classes.list}
          primary={dot.title}
          classes={{ primary: classes.primary }}
        />
      </Link>
      <Divider />
    </div>
  );
}
