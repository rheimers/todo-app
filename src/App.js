import React, { useState, useEffect } from "react";
import "./App.css";
import { getTodocategories } from "./api/todocategories";

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
    <div className="App">
      {todocategories?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}
export default App;
