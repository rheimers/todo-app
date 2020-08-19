import React, { useState, useEffect } from "react";
import "./App.css";
import { getTodocategories } from "./api/todocategories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [todocategories, setTodocategories] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const todocategories = await getTodocategories();
      setTodocategories(todocategories);
    };
    doFetch();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/add">
          <div>NEW TASK</div>
        </Route>
        <Route path="/">
          <div>ALL TASKS</div>
        </Route>
      </Switch>
      <div className="App">
        {todocategories?.map((todocategory) => (
          <div key={todocategory.id}>{todocategory.title}</div>
        ))}
      </div>
    </Router>
  );
}

export default App;
