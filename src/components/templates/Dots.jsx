import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import firebase from "../../firebase/firebase";


const useStyles = makeStyles((theme) => ({
  primary: {
    float:'left',
    height: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    
    
  },
}));

export default function Dots({ dot }) {
  const classes = useStyles();
  const handle_delete = () => {
    firebase.firestore().collection("dots").doc(dot.dotId).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
  return (
    <div style={{ display: "flex"  ,   }} >
      <Link to={`/dot/${dot.dotId}`}>
        <ListItemText
        
          primary={dot.title}
          classes={{ primary: classes.primary }}
        /> 
     
      </Link>
        <button onClick={handle_delete}>削除</button>
      <Divider />
    </div>
  );
}
