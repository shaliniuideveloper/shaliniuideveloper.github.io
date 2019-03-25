import React from "react";
import {HashRouter as Router,Route} from "react-router-dom";
import {MainContainer} from "./components/MainContainer";

const Routes =() =>(
    <Router>
        <Route exact path="/" component={MainContainer} />
    </Router>
);
export default Routes;