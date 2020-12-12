import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

const Form = () => {
  const classes = useStyles();
  return (
    <form className={classes.container}>
      <div className={classes.div}> </div>
      <label>
        <input type="text" name="name" className={classes.input} />
      </label>
      <input type="submit" value="Send" />
      <div className={classes.div}> </div>

      <Tabs>
        <TabList>
          <Tab>tab1</Tab>
          <Tab>tab2</Tab>
          <Tab>tab3</Tab>
        </TabList>

        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
      <div className={classes.div}> </div>
      <TextField
        id="outlined-multiline-static"
        className={classes.text}
        multiline
        rows={6}
        variant="outlined"
      />
      <div className={classes.div}> </div>
      <input className={classes.input}></input>
      <select>
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
    </form>
  );
};
export default Form;
