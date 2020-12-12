import React from "react";
import Header from "../templates/Header/Header.jsx";
import Footer from "../templates/Footer/Footer.jsx";
import BarChart from "../templates/graph/BarChart";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

const MainStyle = {
  display: "flex",
  justifyContent: 'space-between',
}


const MyDots = () => {
  const classes = useStyles();
  return (
    <React.Fragment>   
      <Header />
      <from className="MainFrom" style={MainStyle}>
     
        
          <div >
            <input name="タグの入力" style={{margin:"5px"}}></input>
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
            <BarChart />
            <TextField
              id="outlined-multiline-static"
              className={classes.text}
              multiline
              rows={6}
              variant="outlined"
            />
            <div className={classes.div}> </div>
          </div>
          <div>
            <ul>
              <li>データ1</li>
              <li>データ2</li>
              <li>データ3</li>
              <li>データ4</li>
            </ul>
          </div>
        
      </from>
      <Footer />
    </React.Fragment>

  );
};
export default MyDots;
