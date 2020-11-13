import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../firebase/firebase";

export default function DotDetail() {
  const { id } = useParams();
  const [dot, set_dot] = useState();
  useEffect(() => {
    firebase
      .firestore()
      .collection("dots")
      .onSnapshot((snapshot) => {
        const dots = snapshot.docs.map((doc) => {
          return doc.data();
        });
        set_dot(dots.find((dot) => dot.id == id));
      });
  }, []);

  return (
    <React.Fragment>
      {dot && <p>title : {dot.title}</p>}
      {dot && <p>tag : {dot.tag}</p>}
      {dot && <p>url : {dot.url}</p>}
      {dot && <p>working : {dot.working}</p>}
      {dot && <p>text : {dot.text}</p>}
    </React.Fragment>
  );
}
