import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewTask from "./pages/NewTask";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <NewTask />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
