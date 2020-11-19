import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { AuthContext } from "../../firebase/AuthService";
import firebase from "../../firebase/firebase";
import { add_dot } from "../../reducks/dots/action";

const Select = React.forwardRef(({ label }, ref) => (
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
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
  </>
));

export default function MiniForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const dotId = shortid.generate();
    firebase.firestore().collection("dots").doc(dotId).set({
      dotId: dotId,
      title: data.title,
      text: "",
      url: "",
      working: data.working,
      tag: "",
      userId: "",
      createdAt: new Date(),
    });
    dispatch(add_dot(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input name="title" ref={register({ required: true })} />
      <Select label="working" ref={register({ required: true })} />
      <input type="submit" value="Send" />
    </form>
  );
}
