import React from "react";
import Header from "../templates/Header/Header.jsx";
import Footer from "../templates/Footer/Footer.jsx";


const bodyStyle = {
  display: "flex",
}


const OurDots = () => {

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
      <div className='Our-list'>
        <ul>
          <li>データ1</li>
          <li>データ2</li>
          <li>データ3</li>
          <li>データ4</li>
        </ul>
      </div>
    </div>
      <Footer />
    </React.Fragment>

  );
};
export default OurDots;
