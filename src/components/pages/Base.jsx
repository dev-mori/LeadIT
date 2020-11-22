import React from "react";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";
import BarChart from "../templates/graph/BarChart";
import MiniDots from "../templates/MiniDots";
import MiniForm from "../templates/MiniForm";
// import Dots from "../templates/Dots";
import { useSelector } from "react-redux";
import firebase from "../../firebase/firebase";
import { red } from "@material-ui/core/colors";
// import UserIcon from "../templates/icons/user/user";

export default function Base() {
  const dots = useSelector((state) => state.dots);
  // console.log(dots);
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <React.Fragment>
      <Header />
      <div>Index</div>
      <button style={{ width: "100px", height: "50px" }} onClick={logout}>
        ログアウト
      </button>
      <MiniForm />
      <MiniDots />
      <BarChart />
      {/* <UserIcon /> */}
      <Footer />
    </React.Fragment>
  );
}
