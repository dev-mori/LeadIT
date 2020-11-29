import React from "react";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";
import BarChart from "../templates/graph/BarChart";
import MiniDots from "../templates/MiniDots";
import MiniForm from "../templates/MiniForm";
import Tags from "../templates/graph/Tags"
// import Dots from "../templates/Dots";
import { useSelector } from "react-redux";
import firebase from "../../firebase/firebase";
import { red } from "@material-ui/core/colors";
// import UserIcon from "../templates/icons/user/user";
import { Purpose } from "../templates/Header/HeaderElements";
import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import { Inner, Warp, Tagsli} from "../templates/Header/HeaderElements"

export default function Base() {
  const dots = useSelector((state) => state.dots);
  // console.log(dots);
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <React.Fragment>
      <Header>
      </Header>
      {/* <Purpose> プログラミングを始めたきっかけ、目標を書いてもらいログインする度にここで本来の目的を思い出してもらう欄</Purpose> */}
      
      <Inner>
         <BarChart />
        <Warp>  
         <MiniForm />
         <MiniDots />
        </Warp>
      </Inner>
      <Tagsli>
        <Tags />
     </Tagsli>
     

      
      {/* <UserIcon /> */}
      <Footer />
      {/* <div>Index</div>
      <button style={{ width: "100px", height: "10px" }} onClick={logout}>
        ログアウト
      </button> */}
    </React.Fragment>
  );
}



  

