import React from "react";
import Footer from "../templates/Footer/Footer";
import Header from "../templates/Header/Header";
import BarChart from "../templates/graph/BarChart";
import MiniDots from "../templates/MiniDots";
import MiniForm from "../templates/MiniForm";
import UserIcon from "../templates/icons/user/user";

export default function Base() {
  return (
    <React.Fragment>
      <Header />
      <div>Index</div>
      <MiniForm />
      <MiniDots />
      <BarChart />
      <UserIcon />
      <Footer />
    </React.Fragment>
  );
}
