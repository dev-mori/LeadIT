import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/pages/Index";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import SignIn from "./components/pages/Signin";
// import SignUp from "./components/pages/SignUp";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        {/* <Route exact path="/home" component={Home} /> */}
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/signin" component={SignIn} /> */}
        {/* <Route exact path="/signup" component={SignUp} /> */}
      </Switch>
    </Router>
  );
}
