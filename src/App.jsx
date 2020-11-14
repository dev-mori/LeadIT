import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Base from "./components/pages/Base";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import MyDots from "./components/pages/MyDots";
import DotDetail from "./components/pages/DotDetail";
// import Form from "./components/pages/Form";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Base} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mydots" component={MyDots} />
        {/* <Route exact path="/form" component={Form} /> */}
        <Route exact path="/dot/:id" component={DotDetail} />
      </Switch>
    </Router>
  );
}
