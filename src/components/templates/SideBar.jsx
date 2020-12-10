import React from "react";
import TagLinks from "./TagLinks";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: 200,
    height: "100vh",
    backgroundColor: "gray",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TagLinks />
    </div>
  );
}
