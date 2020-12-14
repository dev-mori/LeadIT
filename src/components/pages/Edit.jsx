import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthService";
import Header from "../templates/Header/Header.jsx";
import Footer from "../templates/Footer/Footer.jsx";
import BarChart from "../templates/graph/BarChart";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormSideBar from "../templates/FormSideBar";
import { useDispatch } from "react-redux";
import firebase from "firebase";

const useStyles = makeStyles({
  container: {
    width: "400px",
    margin: "0 auto",
  },
  input: {
    width: "343px",
  },
  div: {
    height: "40px",
  },
  text: {
    width: "400px",
  },
});

const bodyStyle = {
  float: "left",
};

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useContext(AuthContext);
  const [dot, set_dot] = useState();
  const [tags, set_tags] = useState();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    firebase
      .firestore()
      .collection("dots")
      .get()
      .then((data) => {
        const dots = data.docs.map((doc) => {
          return doc.data();
        });
        set_dot(dots.find((dot) => dot.dotId === id));
        dot && set_tags(dot.tags);
      });
  }, []);
  useEffect(() => {
    if (dot) {
      set_tags(dot.tags);
    }
  }, [dot]);
  const onSubmit = (data) => {
    firebase
      .firestore()
      .collection("dots")
      .doc(dot.dotId)
      .set({
        dotId: dot.dotId,
        title: data.title,
        text: data.text,
        url: data.url,
        working: Number(data.working),
        tags: tags,
        userId: user.uid,
        userName: user.displayName,
        createdAt: new Date(),
        getday: new Date().getDay(),
      });
  };
  return (
    <React.Fragment>
      <Header />
      <div style={bodyStyle}>
        <FormSideBar tags={tags} set_tags={set_tags} />
      </div>
      <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.div}> </div>
        <label>
          <input
            type="text"
            name="title"
            className={classes.input}
            defaultValue={dot && dot.title}
            ref={register({ required: true })}
          />
        </label>
        <label>
          <input
            type="text"
            name="url"
            className={classes.input}
            defaultValue={dot && dot.url}
            ref={register({ required: true })}
          />
        </label>
        <div className={classes.div}>
          {tags &&
            tags.map((tag) => {
              return `${tag} / `;
            })}
        </div>
        <select
          id="working"
          name="working"
          defaultValue={dot && dot.working}
          ref={register({ required: true })}
        >
          {dot && (
            <option value={dot.working} selected>
              {dot.working}
            </option>
          )}
          <option value="0.5">0.5</option>
          <option value="1.0">1.0</option>
          <option value="1.5">1.5</option>
          <option value="2.0">2.0</option>
          <option value="2.5">2.5</option>
          <option value="3.0">3.0</option>
          <option value="3.5">3.5</option>
          <option value="4.0">4.0</option>
          <option value="4.5">4.5</option>
          <option value="5.0">5.0</option>
          <option value="5.5">5.5</option>
          <option value="6.0">6.0</option>
          <option value="6.5">6.5</option>
          <option value="7.0">7.0</option>
          <option value="7.5">7.5</option>
          <option value="8.0">8.0</option>
          <option value="8.5">8.5</option>
          <option value="9.0">9.0</option>
          <option value="10">9+</option>
        </select>
        <TextField
          id="outlined-multiline-static"
          name="text"
          className={classes.text}
          multiline
          rows={6}
          variant="outlined"
          defaultValue={dot && dot.text}
          ref={register({ required: true })}
        />
        <div className={classes.div}> </div>
      </form>
      <Footer />
    </React.Fragment>
  );
};
export default Edit;
